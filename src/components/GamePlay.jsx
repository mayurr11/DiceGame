import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Modal from "./Modal"; // Import the Modal component
import styled from "styled-components";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setShowModal(true); 
      return;
    }

    const randomNumber = getRandomNumber();
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <Main>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="main-section">
        <RollDice currentDice={currentDice} rollDice={rollDice} />
      </div>
      <Modal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        message="Please select a number before rolling the dice."
      />
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  .top-section {
    display: flex;
    justify-content: space-between;
    margin: 2rem 4rem;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      margin: 1rem;
      
      & > * {
        margin-bottom: 1rem;
      }
    }
  }

  .main-section {
    display: flex;
    justify-content: center;
    margin: 2rem 4rem;

    @media (max-width: 768px) {
      margin: 1rem;
    }
  }
`;