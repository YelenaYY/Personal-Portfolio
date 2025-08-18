import React, { useState, useRef, useEffect } from 'react';
import { 
  ChatBotContainer, 
  ChatHeader, 
  ChatMessages, 
  ChatInput, 
  ChatInputContainer,
  Message,
  SendButton,
  CloseButton,
  ChatBotIcon
} from './ChatBotElements';
import { searchKnowledgeBase } from '../../data/ChatbotKnowledgeBase';
import { FaPaperPlane, FaTimes, FaRobot, FaUser } from 'react-icons/fa';

const ChatBot = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Yelena's AI assistant. I can answer questions about her projects, experience, skills, and background. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // RAG: Retrieve relevant context from knowledge base
  const retrieveContext = (query) => {
    const searchResults = searchKnowledgeBase(query);
    
    // Sort by relevance and take top results
    const topResults = searchResults
      .sort((a, b) => {
        const relevanceOrder = { 'high': 3, 'medium': 2, 'low': 1 };
        return relevanceOrder[b.relevance] - relevanceOrder[a.relevance];
      })
      .slice(0, 5); // Take top 5 most relevant results

    // Format context for the LLM
    let context = "Based on Yelena Yu's portfolio information:\n\n";
    
    topResults.forEach(result => {
      if (result.type === 'experience') {
        const exp = result.content;
        context += `EXPERIENCE: ${exp.title} at ${exp.company} (${exp.duration})\n`;
        context += `Description: ${exp.description}\n`;
        context += `Technologies: ${exp.technologies.join(', ')}\n`;
        context += `Achievements: ${exp.achievements.join('; ')}\n\n`;
      } else if (result.type === 'project') {
        const proj = result.content;
        context += `PROJECT: ${proj.title}\n`;
        context += `Description: ${proj.description}\n`;
        context += `Technologies: ${proj.technologies.join(', ')}\n`;
        context += `Achievements: ${proj.achievements.join('; ')}\n`;
        if (proj.github) context += `GitHub: ${proj.github}\n`;
        if (proj.demo) context += `Demo: ${proj.demo}\n\n`;
      } else {
        context += `INFO: ${result.content}\n\n`;
      }
    });

    return context;
  };

  // Generate response using retrieved context
  const generateResponse = async (userMessage) => {
    try {
      // Retrieve relevant context
      const context = retrieveContext(userMessage);
      
      // Create prompt with context
      const prompt = `${context}

User Question: ${userMessage}

Instructions: You are Yelena Yu's portfolio assistant. Answer the user's question based ONLY on the provided portfolio information above. Be helpful, professional, and conversational. If the information isn't available in the context, politely say so and suggest what you can help with instead. Always speak in first person as if you are representing Yelena.

Answer:`;

      // Note: In a real implementation, you would call OpenAI API here
      // For demo purposes, I'll create a simple response system
      
      // Simple keyword-based responses for demonstration
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
        return "I have exciting experience in AI and machine learning! I'm currently interning at Amazon AWS where I'm working on RAG-enhanced generative AI assistants for security teams. Previously, I worked at Arcadia.io as a Data Scientist focusing on health forecasting, where I improved disease prediction accuracy by 17%. I'm also actively contributing to research at HAI Lab on personality inference using LLMs.";
      }
      
      if (lowerMessage.includes('project') || lowerMessage.includes('github')) {
        return "I've worked on several exciting projects! My most recent research project on heart failure prediction using deep learning earned 2nd place at Poster Day among 100+ projects, achieving an AUC of 0.87. I've also built a movie recommendation system with R and Shiny, automated stock trading algorithms, and contributed to the SKTIME open-source library for time series forecasting.";
      }
      
      if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
        return "I'm proficient in multiple programming languages including Python, Java, R, C++, and JavaScript. I specialize in machine learning frameworks like PyTorch and scikit-learn, and have extensive experience with AWS services (SageMaker, RedShift, S3, EC2). I'm particularly passionate about generative AI, RAG systems, and healthcare applications of AI.";
      }
      
      if (lowerMessage.includes('education') || lowerMessage.includes('school') || lowerMessage.includes('university')) {
        return "I'm currently completing my Master's in Computer Science at Northeastern University, focusing on machine learning and data mining with healthcare applications. I previously studied Applied Financial Mathematics at Pepperdine University, which gave me strong mathematical foundations that complement my technical skills.";
      }
      
      if (lowerMessage.includes('aws') || lowerMessage.includes('amazon')) {
        return "I'm thrilled to be joining Amazon AWS as a Software Engineer Intern from May to August 2025! I'll be working on generative AI agents for AWS Security infrastructure, specifically developing RAG-enhanced AI assistants. This builds on my passion for generative AI and my experience with RAG systems.";
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return "You can reach me at yu.yue16@northeastern.edu or visit my portfolio website at yelena.info. I'm always excited to discuss opportunities in AI, machine learning, and healthcare technology!";
      }
      
      // Default response
      return "That's a great question! I can tell you about my experience at AWS, Arcadia.io, and HAI Lab, my projects in deep learning and AI, my technical skills, education, or how to contact me. What specific area would you like to know more about?";
      
    } catch (error) {
      console.error('Error generating response:', error);
      return "I apologize, but I'm having trouble processing your question right now. Please try asking about my experience, projects, skills, or education!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await generateResponse(inputValue);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble right now. Please try again!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <ChatBotContainer>
      <ChatHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ChatBotIcon>
            <FaRobot />
          </ChatBotIcon>
          <div>
            <h4 style={{ margin: 0, color: 'white' }}>Yelena's AI Assistant</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#b0b0b0' }}>Ask me about her work!</p>
          </div>
        </div>
        <CloseButton onClick={onToggle}>
          <FaTimes />
        </CloseButton>
      </ChatHeader>

      <ChatMessages>
        {messages.map((message) => (
          <Message key={message.id} sender={message.sender}>
            <div className="message-avatar">
              {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
            </div>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="timestamp">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </Message>
        ))}
        {isLoading && (
          <Message sender="bot">
            <div className="message-avatar">
              <FaRobot />
            </div>
            <div className="message-content">
              <p>Thinking...</p>
            </div>
          </Message>
        )}
        <div ref={messagesEndRef} />
      </ChatMessages>

      <ChatInputContainer>
        <ChatInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about Yelena's experience, projects, skills..."
          disabled={isLoading}
        />
        <SendButton onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
          <FaPaperPlane />
        </SendButton>
      </ChatInputContainer>
    </ChatBotContainer>
  );
};

export default ChatBot; 