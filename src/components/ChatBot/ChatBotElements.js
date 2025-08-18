import styled from 'styled-components';

export const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 380px;
  height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: 70vh;
    bottom: 80px;
    right: 20px;
    left: 20px;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
  color: white;
  padding: 16px 20px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ChatBotIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f8f9fa;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const Message = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: flex-start;
  gap: 12px;
  
  ${props => props.sender === 'user' && `
    flex-direction: row-reverse;
  `}

  .message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
    
    ${props => props.sender === 'bot' 
      ? `
        background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
        color: white;
      `
      : `
        background: #e3f2fd;
        color: #1976d2;
      `
    }
  }

  .message-content {
    max-width: 70%;
    
    p {
      margin: 0 0 4px 0;
      padding: 12px 16px;
      border-radius: 18px;
      line-height: 1.4;
      font-size: 14px;
      
      ${props => props.sender === 'bot' 
        ? `
          background: white;
          color: #333;
          border: 1px solid #e0e0e0;
          border-radius: 18px 18px 18px 4px;
        `
        : `
          background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
          color: white;
          border-radius: 18px 18px 4px 18px;
        `
      }
    }

    .timestamp {
      font-size: 11px;
      color: #888;
      margin-left: 16px;
    }
  }
`;

export const ChatInputContainer = styled.div`
  padding: 16px 20px;
  background: white;
  border-radius: 0 0 16px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  border-top: 1px solid #e0e0e0;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #39baec;
    box-shadow: 0 0 0 2px rgba(57, 186, 236, 0.1);
  }

  &::placeholder {
    color: #888;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(57, 186, 236, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ChatToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 25px rgba(57, 186, 236, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(57, 186, 236, 0.6);
  }

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 22px;
  }
`; 