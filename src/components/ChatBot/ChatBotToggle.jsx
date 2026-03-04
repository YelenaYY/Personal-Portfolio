import React, { useState } from 'react';
import { ChatToggleButton } from './ChatBotElements';
import ChatBot from './ChatBot';
import { FaRobot, FaTimes } from 'react-icons/fa';

const ChatBotToggle = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <ChatToggleButton onClick={toggleChat}>
        {isChatOpen ? <FaTimes /> : <FaRobot />}
      </ChatToggleButton>
      
      <ChatBot isOpen={isChatOpen} onToggle={toggleChat} />
    </>
  );
};

export default ChatBotToggle; 