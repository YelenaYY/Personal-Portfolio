# RAG-Powered AI Chatbot for Portfolio

## Overview

This is a Retrieval-Augmented Generation (RAG) chatbot specifically designed for your personal portfolio. It can answer questions about your experience, projects, skills, and background using information from your actual portfolio data.

## Features

✅ **RAG System**: Retrieves relevant context from your knowledge base  
✅ **Professional UI**: Modern, responsive chat interface  
✅ **Smart Responses**: Answers grounded in your actual information  
✅ **Mobile Friendly**: Responsive design for all devices  
✅ **Easy Integration**: Drop-in component for any React app  

## Current Implementation

The chatbot currently uses a **demo response system** with keyword-based matching. This provides immediate functionality while you decide on the AI service.

### Files Structure
```
src/components/ChatBot/
├── ChatBot.js              # Main chatbot component with RAG logic
├── ChatBotElements.js      # Styled components for UI
├── ChatBotToggle.js        # Floating toggle button
├── OpenAIService.js        # OpenAI integration (optional)
└── README.md              # This documentation

src/data/
└── ChatbotKnowledgeBase.js # Your portfolio information for RAG
```

## How the RAG System Works

1. **User asks a question** → "What projects has Yelena worked on?"

2. **Knowledge Retrieval** → Searches your knowledge base for relevant information
   - Projects, experience, skills, education
   - Uses keyword matching and semantic relevance

3. **Context Injection** → Formats relevant information as context

4. **Response Generation** → Creates personalized response based on retrieved context

5. **User receives answer** → Accurate, fact-based response about your portfolio

## Upgrading to Full AI

### Option 1: OpenAI Integration (Recommended)

1. Install OpenAI package:
```bash
npm install openai
```

2. Get OpenAI API key from [OpenAI Dashboard](https://platform.openai.com/api-keys)

3. Add to your environment variables:
```bash
# .env.local
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

4. Update `ChatBot.js` to use OpenAI service:
```javascript
import { createOpenAIService } from './OpenAIService';

// Replace the demo generateResponse function with:
const openAIService = createOpenAIService(process.env.REACT_APP_OPENAI_API_KEY);

const generateResponse = async (userMessage) => {
  try {
    const context = retrieveContext(userMessage);
    return await openAIService.generateResponse(context, userMessage);
  } catch (error) {
    console.error('Error generating response:', error);
    return "I apologize, but I'm having trouble processing your question right now.";
  }
};
```

### Option 2: Other AI Services

- **Anthropic Claude**: Similar setup to OpenAI
- **Google PaLM API**: Good alternative
- **Local LLMs**: Use Ollama or similar for privacy

## Customization

### Adding New Information

Update `src/data/ChatbotKnowledgeBase.js`:

```javascript
// Add new projects
knowledgeBase.projects.push({
  title: "New Project",
  description: "Project description...",
  technologies: ["Tech1", "Tech2"],
  // ... other fields
});

// Add new experience
knowledgeBase.experience.push({
  title: "New Role",
  company: "Company Name",
  // ... other fields
});
```

### Improving RAG Retrieval

1. **Better Semantic Search**: Implement vector embeddings
2. **Weighted Keywords**: Prioritize certain topics
3. **Conversation Memory**: Remember previous context
4. **Multi-modal**: Add support for documents/images

### UI Customization

Modify `ChatBotElements.js` to change:
- Colors and themes
- Chat bubble styles
- Animation effects
- Mobile responsiveness

## Testing

Try these example questions:
- "What experience does Yelena have with AWS?"
- "Tell me about her machine learning projects"
- "What programming languages does she know?"
- "Where did she study?"
- "How can I contact her?"

## Performance Tips

1. **Knowledge Base Size**: Keep under 50KB for fast searches
2. **Response Caching**: Cache common questions
3. **Lazy Loading**: Load chatbot on first interaction
4. **Error Handling**: Graceful fallbacks for API failures

## Future Enhancements

- [ ] Vector similarity search instead of keyword matching
- [ ] Conversation history and context awareness
- [ ] Integration with your resume PDF
- [ ] Multi-language support
- [ ] Analytics on chatbot usage
- [ ] Voice input/output
- [ ] Integration with calendar for scheduling

## Cost Considerations

**OpenAI GPT-3.5 Turbo**: ~$0.002 per 1K tokens
- Average conversation: 10-20 messages
- Estimated cost per conversation: $0.01-0.05
- 1000 conversations ≈ $10-50/month

**Free Alternatives**:
- Hugging Face Transformers
- Local LLM deployment
- Keyword-based responses (current implementation)

## Security Notes

- Never commit API keys to Git
- Use environment variables for sensitive data
- Consider rate limiting for production
- Validate user inputs to prevent prompt injection

## Support

For questions or improvements to this chatbot implementation, the RAG system is designed to be easily extensible and maintainable! 