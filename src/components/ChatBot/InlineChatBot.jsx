import React, { useState, useRef, useEffect } from 'react';
import { 
  InlineChatBotContainer, 
  InlineChatHeader, 
  InlineChatMessages, 
  InlineChatInput, 
  InlineChatInputContainer,
  InlineMessage,
  InlineSendButton,
  InlineChatBotIcon,
  InlineChatIntro
} from './InlineChatBotElements';
import { searchKnowledgeBase } from '../../data/ChatbotKnowledgeBase';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import ScrollAnimation from "react-animate-on-scroll";

const InlineChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Yelena's AI assistant. Ask me anything about her projects, experience, skills, or background!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest('[data-chat-messages]');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
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
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! Nice to meet you! I'm excited to share information about my work in AI and machine learning. Feel free to ask about my experience at AWS, my research projects, technical skills, or anything else you'd like to know!";
      }
      
      // Default response
      return "That's a great question! I can tell you about my experience at AWS, Arcadia.io, and HAI Lab, my projects in deep learning and AI, my technical skills, education, or how to contact me. What specific area would you like to know more about?";
      
    } catch (error) {
      console.error('Error generating response:', error);
      return "I apologize, but I'm having trouble processing your question right now. Please try asking about my experience, projects, skills, or education!";
    }
  };

  const handleSendMessage = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
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
      e.stopPropagation();
      handleSendMessage(e);
    }
  };

  const quickQuestions = [
    "What's your experience with AI?",
    "Tell me about your projects",
    "What technologies do you use?",
    "How can I contact you?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Auto-send the question
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <div id="ai-assistant">
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#39baec"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      
      <InlineChatBotContainer>
        <div className="Container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="SectionTitle">AI Assistant -- WIP</div>
            <InlineChatIntro>
              <InlineChatBotIcon>
                <FaRobot />
              </InlineChatBotIcon>
              <div>
                <h3>Chat with my AI Assistant</h3>
                <p>Ask questions about my experience, projects, skills, and background. I've trained this assistant on all my portfolio information!</p>
              </div>
            </InlineChatIntro>

            <div className="BigCard">
              <InlineChatHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <InlineChatBotIcon small>
                    <FaRobot />
                  </InlineChatBotIcon>
                  <div>
                    <h4 style={{ margin: 0, color: 'white' }}>Yelena's AI Assistant</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#b0b0b0' }}>Powered by RAG (Retrieval-Augmented Generation)</p>
                  </div>
                </div>
              </InlineChatHeader>

              <InlineChatMessages data-chat-messages>
                {messages.map((message) => (
                  <InlineMessage key={message.id} sender={message.sender}>
                    <div className="message-avatar">
                      {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
                    </div>
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="timestamp">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </InlineMessage>
                ))}
                {isLoading && (
                  <InlineMessage sender="bot">
                    <div className="message-avatar">
                      <FaRobot />
                    </div>
                    <div className="message-content">
                      <p>Thinking...</p>
                    </div>
                  </InlineMessage>
                )}
                <div ref={messagesEndRef} />
              </InlineChatMessages>

              {/* Quick Questions */}
              <div style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', borderTop: '1px solid #e0e0e0' }}>
                <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', fontWeight: '500' }}>Quick questions:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#39baec',
                        color: 'white',
                        border: 'none',
                        borderRadius: '16px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#2196f3'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#39baec'}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <InlineChatInputContainer>
                <form onSubmit={(e) => handleSendMessage(e)} style={{ display: 'flex', gap: '12px', width: '100%' }}>
                  <InlineChatInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about my experience, projects, skills, or anything else..."
                    disabled={isLoading}
                  />
                  <InlineSendButton type="submit" disabled={isLoading || !inputValue.trim()}>
                    <FaPaperPlane />
                  </InlineSendButton>
                </form>
              </InlineChatInputContainer>
            </div>
          </ScrollAnimation>
        </div>
      </InlineChatBotContainer>
    </div>
  );
};

export default InlineChatBot; 