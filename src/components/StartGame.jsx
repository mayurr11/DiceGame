import DicePic from "../assets/images/dices.png";
import styled from "styled-components";
import { Button } from "../styled-components/Button";

const StartGame = ({ toggleGamePlay, highScore }) => {
  return (
    <Container>
      <div className="img-container">
        <img src={DicePic} alt="dice image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <h2>High Score: {highScore}</h2> 
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 0 auto;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    h2 {
      font-size: 26px;
      font-weight: 500;
      margin: 1rem 0; /* Add some margin for spacing */
    }
  }

  .img-container img {
    max-width: 550px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    .content {
      h1 {
        font-size: 48px;
      }
      h2 {
        font-size: 24px;
      }
    }

    .img-container img {
      max-width: 300px;
    }
  }
`;
