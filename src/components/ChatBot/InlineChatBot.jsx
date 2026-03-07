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
import { retrieveForQuestion, detectIntent } from '../../data/ChatbotKnowledgeBase';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

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
  }, [messages, isLoading]);

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

  const makeId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return String(Date.now() + Math.random());
  };

  const handleSendMessage = async (inputOrEvent) => {
    let text = '';

    if (inputOrEvent?.preventDefault) {
      inputOrEvent.preventDefault();
      inputOrEvent.stopPropagation();
      text = inputValue;
    } else if (typeof inputOrEvent === 'string') {
      text = inputOrEvent;
    } else {
      text = inputValue;
    }

    const textToSend = String(text ?? '').trim();

    if (!textToSend || isLoading) return;

    const userMessage = {
      id: makeId(),
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
        id: makeId(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Generate response failed:', error);

      const errorMessage = {
        id: makeId(),
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

  const quickQuestions = [
    "What's your experience with AI?",
    'Tell me about your projects',
    'What technologies do you use?',
    'How can I contact you?'
  ];

  const handleQuickQuestion = (question) => {
    if (isLoading) return;
    setInputValue(question);
    handleSendMessage(question);
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
            <div className="SectionTitle">Y.AI — Yelena's AI Assistant</div>

            <InlineChatIntro>
              <InlineChatBotIcon>
                <FaRobot />
              </InlineChatBotIcon>
              <div>
                <h3>Chat with my AI Assistant</h3>
                <p>
                  Ask questions about my experience, projects, skills, and background.
                  I&apos;ve trained this assistant on my portfolio information.
                </p>
              </div>
            </InlineChatIntro>

            <div className="BigCard">
              <InlineChatHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <InlineChatBotIcon small>
                    <FaRobot />
                  </InlineChatBotIcon>
                  <div>
                    <h4 style={{ margin: 0, color: 'white' }}>Yelena&apos;s AI Assistant</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#b0b0b0' }}>
                      Powered by structured retrieval + LLM
                    </p>
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
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
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

              <div
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f8f9fa',
                  borderTop: '1px solid #e0e0e0'
                }}
              >
                <p
                  style={{
                    margin: '0 0 10px 0',
                    fontSize: '14px',
                    color: '#666',
                    fontWeight: '500'
                  }}
                >
                  Quick questions:
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleQuickQuestion(question)}
                      disabled={isLoading}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: isLoading ? '#9ecfe0' : '#39baec',
                        color: 'white',
                        border: 'none',
                        borderRadius: '16px',
                        fontSize: '12px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: isLoading ? 0.7 : 1
                      }}
                      onMouseOver={(e) => {
                        if (!isLoading) e.currentTarget.style.backgroundColor = '#2196f3';
                      }}
                      onMouseOut={(e) => {
                        if (!isLoading) e.currentTarget.style.backgroundColor = '#39baec';
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <InlineChatInputContainer>
                <form
                  onSubmit={handleSendMessage}
                  style={{ display: 'flex', gap: '12px', width: '100%' }}
                >
                  <InlineChatInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
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