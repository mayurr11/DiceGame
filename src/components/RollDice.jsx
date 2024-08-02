import diceAssets from "../assets/images/Dice/diceAssets";
import styled from "styled-components";

const RollDice = ({currentDice, rollDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={diceAssets[`Dice${currentDice}`]} alt={`Dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .dice {
    cursor: pointer;
    user-select: none; /* Disable text selection */
    -webkit-tap-highlight-color: transparent; /* Remove the blue highlight on tap */
    transition: transform 0.2s ease-in-out; /* Transition effect */
  }

  .dice img {
    transition: transform 0.2s ease-in-out; /* Transition effect */
  }

  .dice:active img {
    transform: scale(0.9); /* Scale down when clicked */
  }
`;
