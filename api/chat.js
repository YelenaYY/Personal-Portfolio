export default async function handler(req, res) {
    // CORS (optional; helpful for local testing / debugging)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
    if (req.method === "OPTIONS") return res.status(204).end();
  
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed. Use POST." });
    }
  
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "Missing DEEPSEEK_API_KEY in server environment",
        hint: "Add DEEPSEEK_API_KEY to .env.local (local) and Vercel Env Vars (prod), then restart vercel dev.",
      });
    }
  
    try {
      const { message, context, history } = req.body || {};
  
      if (!message || typeof message !== "string") {
        return res.status(400).json({
          error: "Missing or invalid 'message' (string) in request body",
        });
      }
  
      const safeHistory = Array.isArray(history)
        ? history
            .filter(
              (m) =>
                m &&
                typeof m === "object" &&
                typeof m.role === "string" &&
                typeof m.content === "string"
            )
            .map((m) => ({
              role: m.role,
              content: m.content,
            }))
        : [];
  
      const safeContext =
        context && typeof context === "object" && !Array.isArray(context)
          ? context
          : {};
  
      const intent = safeContext.intent || "general";
      const retrievedFacts = safeContext.retrieved || {};
  
      const systemPrompt = `
  You are Yelena Yu's portfolio assistant.
  
  You will receive:
  1. the user's question
  2. structured facts retrieved from Yelena's portfolio knowledge base
  
  Your job is to answer naturally and accurately using only those facts.
  
  Rules:
  - Be concise, warm, and professional.
  - Do not say "Based on the provided context".
  - For broad questions, synthesize across multiple facts into a short summary.
  - If the user asks about contact info, answer directly from the contact fields.
  - If something is not available in the facts, say so briefly and suggest the portfolio website when appropriate.
  - Speak as Yelena's assistant, not as a generic AI model.
  - Never invent facts not present in the provided facts.
  `.trim();
  
      const contextPayload = {
        intent,
        userQuestion: message,
        facts: retrievedFacts,
      };
  
      const deepseekPayload = {
        model: "deepseek-chat",
        temperature: 0.4,
        max_tokens: 350,
        messages: [
          { role: "system", content: systemPrompt },
          ...safeHistory,
          { role: "user", content: JSON.stringify(contextPayload, null, 2) },
        ],
      };
  
      console.log(
        "Server → DeepSeek payload:",
        JSON.stringify(deepseekPayload, null, 2)
      );
  
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
  
      let response;
      try {
        response = await fetch("https://api.deepseek.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          signal: controller.signal,
          body: JSON.stringify(deepseekPayload),
        });
      } finally {
        clearTimeout(timeout);
      }
  
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("DeepSeek non-OK:", response.status, text);
  
        return res.status(response.status).json({
          error: "DeepSeek API error",
          status: response.status,
          details: text || "(no body)",
        });
      }
  
      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content?.trim();
  
      return res.status(200).json({
        reply: reply || "Sorry, I couldn't generate a response.",
      });
    } catch (error) {
      if (error?.name === "AbortError") {
        return res.status(504).json({ error: "DeepSeek request timed out" });
      }
  
      console.error("AI generation failed:", error);
      return res.status(500).json({
        error: "AI generation failed",
        details: String(error?.message || error),
      });
    }
  }