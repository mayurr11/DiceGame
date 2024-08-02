import { useState, useEffect } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Modal from "./Modal"; // Import the Modal component
import styled from "styled-components";
import { Button, OutlineButton } from "../styled-components/Button";

const GamePlay = ({ endGame, updateHighScore }) => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showRules, setShowRules] = useState(false); // State to control rules modal visibility

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    const savedSelectedNumber = localStorage.getItem("selectedNumber");
    const savedCurrentDice = localStorage.getItem("currentDice");

    if (savedScore) setScore(JSON.parse(savedScore));
    if (savedSelectedNumber) setSelectedNumber(JSON.parse(savedSelectedNumber));
    if (savedCurrentDice) setCurrentDice(JSON.parse(savedCurrentDice));
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    localStorage.setItem("selectedNumber", JSON.stringify(selectedNumber));
  }, [selectedNumber]);

  useEffect(() => {
    localStorage.setItem("currentDice", JSON.stringify(currentDice));
  }, [currentDice]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      setShowModal(true); // Show modal if no number is selected
      return;
    }

    const randomNumber = getRandomNumber();
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  const resetGame = () => {
    setScore(0);
    setSelectedNumber(null);
    setCurrentDice(1);
  };

  const handleEndGame = () => {
    updateHighScore(score);
    endGame();
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 1500); // Set to 1.5 seconds (1500 milliseconds)

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if showModal changes
    }
  }, [showModal]);

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
        <RollDice 
          currentDice={currentDice} 
          rollDice={rollDice} 
          selectedNumber={selectedNumber} 
          setShowModal={setShowModal} 
        />
        <div className="btns">
          <OutlineButton onClick={resetGame}>Reset</OutlineButton>
          <Button onClick={() => setShowRules(true)}>Show Rules</Button>
          <Button onClick={handleEndGame}>End Game</Button>
        </div>
      </div>
      <Modal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        message="Please select a number before rolling the dice."
      />
      <Modal 
        show={showRules} 
        onClose={() => setShowRules(false)} 
        message="Game Rules: Select a number and roll the dice. If the dice number matches the selected number, you gain points equal to the dice number. Otherwise, you lose 2 points."
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
    min-width: 100%;
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
    align-items: center; /* Centering items vertically */
    flex-direction: column; /* Align items in column */
    margin: 2rem 4rem;

    @media (max-width: 768px) {
      margin: 1rem;
    }

    .btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      width: 100%; /* Ensure buttons take full width */
    }
  }
`;
