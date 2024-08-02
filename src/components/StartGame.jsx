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
        <p>High Score: {highScore}</p>
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
    p {
      font-size: 24px;
      margin: 1rem 0;
    }
  }

  .img-container img {
    max-width: 550px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    .content {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 18px;
      }
    }
    .img-container img {
      max-width: 300px;
    }
  }
`;
