// OpenAI Service for RAG-powered responses
// To use this, you'll need to:
// 1. Install openai: npm install openai
// 2. Set up your OpenAI API key
// 3. Replace the demo responses in ChatBot.js with this service

class OpenAIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.openai.com/v1/chat/completions';
  }

  async generateResponse(context, userMessage) {
    const prompt = `${context}

User Question: ${userMessage}

Instructions: You are Yelena Yu's portfolio assistant. Answer the user's question based ONLY on the provided portfolio information above. Be helpful, professional, and conversational. If the information isn't available in the context, politely say so and suggest what you can help with instead. Always speak in first person as if you are representing Yelena. Keep responses concise but informative.

Answer:`;

    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are Yelena Yu\'s professional portfolio assistant. Always respond in first person as if you are Yelena herself.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw error;
    }
  }
}

// Export a function to create the service
export const createOpenAIService = (apiKey) => {
  return new OpenAIService(apiKey);
};

// Example usage in ChatBot.js:
/*
import { createOpenAIService } from './OpenAIService';

// In your component:
const openAIService = createOpenAIService(process.env.REACT_APP_OPENAI_API_KEY);

// Replace the generateResponse function with:
const generateResponse = async (userMessage) => {
  try {
    const context = retrieveContext(userMessage);
    return await openAIService.generateResponse(context, userMessage);
  } catch (error) {
    console.error('Error generating response:', error);
    return "I apologize, but I'm having trouble processing your question right now. Please try asking about my experience, projects, skills, or education!";
  }
};
*/

export default OpenAIService; 