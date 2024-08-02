import React from "react";
import DicePic from "../assets/images/dices.png";
import styled from "styled-components";

const StartGame = ({ toggleGamePlay }) => {
  return (
    <Container>
      <div className="img-container">
        <img src={DicePic} alt="dice image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
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
  }

  .img-container img {
    max-width: 550px;
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  background-color: #000;
  color: #fff;
  border: 1px solid transparent;
  outline: none;
  min-width: 220px;
  font-size: 16px;
  font-weight: 550;
  transition: 0.4s background-color ease-in;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;
