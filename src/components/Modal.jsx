import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Modal = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <Content>
          <Message>{message}</Message>
          <Button onClick={onClose}>Close</Button>
        </Content>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.596);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const CloseButton = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  color: #888;
  &:hover {
    color: #555;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Message = styled.p`
  margin-bottom: 2rem;
  font-size: 1.125rem;
  color: #666;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
  &:focus {
    outline: none;
  }
`;
