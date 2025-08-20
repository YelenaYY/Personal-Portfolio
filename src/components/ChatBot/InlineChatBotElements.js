import styled from 'styled-components';

export const InlineChatBotContainer = styled.div`
  padding: 50px 0;
  background: #f8f9fa;
  
  .Container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .SectionTitle {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #151418;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .BigCard {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-top: 2rem;
  }
`;

export const InlineChatIntro = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  h3 {
    margin: 0 0 10px 0;
    color: #151418;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: #666;
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const InlineChatBotIcon = styled.div`
  width: ${props => props.small ? '36px' : '60px'};
  height: ${props => props.small ? '36px' : '60px'};
  background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.small ? '16px' : '24px'};
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(57, 186, 236, 0.3);
`;

export const InlineChatHeader = styled.div`
  background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const InlineChatMessages = styled.div`
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: #f8f9fa;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const InlineMessage = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
  gap: 15px;
  
  ${props => props.sender === 'user' && `
    flex-direction: row-reverse;
  `}

  .message-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
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
    max-width: 75%;
    
    p {
      margin: 0 0 6px 0;
      padding: 15px 20px;
      border-radius: 20px;
      line-height: 1.5;
      font-size: 15px;
      
      ${props => props.sender === 'bot' 
        ? `
          background: white;
          color: #333;
          border: 1px solid #e0e0e0;
          border-radius: 20px 20px 20px 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        `
        : `
          background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
          color: white;
          border-radius: 20px 20px 6px 20px;
          box-shadow: 0 2px 8px rgba(57, 186, 236, 0.3);
        `
      }
    }

    .timestamp {
      font-size: 12px;
      color: #888;
      margin-left: 20px;
    }
  }
  
  @media (max-width: 768px) {
    .message-content {
      max-width: 85%;
      
      p {
        padding: 12px 16px;
        font-size: 14px;
      }
    }
  }
`;

export const InlineChatInputContainer = styled.div`
  padding: 20px;
  background: white;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
`;

export const InlineChatInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 30px;
  outline: none;
  font-size: 15px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #39baec;
    box-shadow: 0 0 0 3px rgba(57, 186, 236, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

export const InlineSendButton = styled.button`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #39baec 0%, #2196f3 100%);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(57, 186, 236, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }
`; 