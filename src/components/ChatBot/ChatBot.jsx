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
import { retrieveForQuestion, detectIntent } from '../../data/ChatbotKnowledgeBase';
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

  // Structured retrieval from knowledge base
  const retrieveContext = (query) => {
    const intent = detectIntent(query);
    const retrieved = retrieveForQuestion(query);

    return {
      intent,
      retrieved,
    };
  };

  const generateResponse = async (userMessage) => {
    const context = retrieveContext(userMessage);

    const history = messages
      .slice(-8)
      .map((m) => ({
        role: m.sender === 'bot' ? 'assistant' : 'user',
        content: String(m.text ?? ''),
      }));

    console.log(
      'Client → /api/chat payload:',
      JSON.stringify({ message: userMessage, context, history }, null, 2)
    );

    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userMessage,
        context,
        history,
      }),
    });

    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      console.error('Chat API error:', err);
      return "Sorry — I’m having trouble right now. Please try again in a moment.";
    }

    const data = await r.json();
    return data.reply || "Sorry, I couldn't generate a response.";
  };

  const handleSendMessage = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!inputValue.trim() || isLoading) return;

    const textToSend = inputValue.trim();

    const userMessage = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await generateResponse(textToSend);

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Generate response failed:', error);

      const errorMessage = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble right now. Please try again!",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, errorMessage]);
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

  if (!isOpen) return null;

  return (
    <ChatBotContainer>
      <ChatHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ChatBotIcon>
            <FaRobot />
          </ChatBotIcon>
          <div>
            <h4 style={{ margin: 0, color: 'white' }}>Yelena&apos;s AI Assistant</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#b0b0b0' }}>
              Ask me about her work!
            </p>
          </div>
        </div>
        <CloseButton onClick={onToggle}>
          <FaTimes />
        </CloseButton>
      </ChatHeader>

      <ChatMessages data-chat-messages>
        {messages.map((message) => (
          <Message key={message.id} sender={message.sender}>
            <div className="message-avatar">
              {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
            </div>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="timestamp">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
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
        <form
          onSubmit={handleSendMessage}
          style={{ display: 'flex', gap: '12px', width: '100%' }}
        >
          <ChatInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about Yelena's experience, projects, skills..."
            disabled={isLoading}
          />
          <SendButton type="submit" disabled={isLoading || !inputValue.trim()}>
            <FaPaperPlane />
          </SendButton>
        </form>
      </ChatInputContainer>
    </ChatBotContainer>
  );
};

export default ChatBot;