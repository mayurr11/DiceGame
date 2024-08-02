import { useState } from "react";
import styled, { keyframes } from "styled-components";

// RollDice component
const RollDice = ({ currentDice, rollDice, selectedNumber, setShowModal }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [audio] = useState(new Audio('/assets/dice-roll.mp3')); // Update path as needed

  const handleRoll = () => {
    if (selectedNumber === null || selectedNumber === undefined) {
      // If no number is selected, do not roll the dice
      setShowModal(true); 
      return;
    }

    if (isRolling) return; // Prevent rolling while already rolling

    setIsRolling(true);
    audio.play().catch(error => {
      console.error("Error playing audio: ", error);
    });

    // Roll dice and update state after 1 second
    setTimeout(() => {
      rollDice();
      setIsRolling(false);
    }, 1000); // Duration of the animation
  };

  return (
    <DiceContainer onClick={handleRoll}>
      <Dice isRolling={isRolling}>
        <Face className="front" texture="/assets/texture-front.png">{getDots(currentDice)}</Face>
        <Face className="back" texture="/assets/texture-back.png">{getDots(6)}</Face>
        <Face className="right" texture="/assets/texture-right.png">{getDots(5)}</Face>
        <Face className="left" texture="/assets/texture-left.png">{getDots(4)}</Face>
        <Face className="top" texture="/assets/texture-top.png">{getDots(3)}</Face>
        <Face className="bottom" texture="/assets/texture-bottom.png">{getDots(2)}</Face>
      </Dice>
    </DiceContainer>
  );
};

// Function to generate dots based on dice number
const getDots = (number) => {
  const positions = {
    1: [[50, 50]],
    2: [[30, 30], [70, 70]],
    3: [[30, 30], [50, 50], [70, 70]],
    4: [[30, 30], [30, 70], [70, 30], [70, 70]],
    5: [[30, 30], [30, 70], [50, 50], [70, 30], [70, 70]],
    6: [[30, 30], [30, 50], [30, 70], [70, 30], [70, 50], [70, 70]],
  };

  const dots = positions[number] || [];
  return dots.map(([left, top], index) => (
    <Dot key={index} style={{ left: `${left}%`, top: `${top}%` }} />
  ));
};

export default RollDice;

// Styled-components for the dice
// Dice roll animation keyframes
const diceRollAnimation = keyframes`
  0% {
    transform: rotateX(0) rotateY(0);
  }
  100% {
    transform: rotateX(1080deg) rotateY(1080deg);
  }
`;

const DiceContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  perspective: 1000px; /* Added for better 3D effect */
`;

const Dice = styled.div`
  position: relative;
  width: 200px; /* Increased size */
  height: 200px; /* Increased size */
  transform-style: preserve-3d;
  transform: ${(props) => (props.isRolling ? 'rotateX(1080deg) rotateY(1080deg)' : 'none')};
  animation: ${(props) => (props.isRolling ? diceRollAnimation : 'none')} 1s ease-in-out; /* 1 second */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Added shadow */
  border-radius: 12px; /* Rounded corners for a more modern look */
  background: radial-gradient(circle at 50%, #fff, #e0e0e0); /* Subtle gradient for a 3D effect */
`;

const Face = styled.div`
  position: absolute;
  width: 200px; /* Increased size */
  height: 200px; /* Increased size */
  background: ${(props) => `url(${props.texture}) no-repeat center center`};
  background-size: cover; /* Ensure texture covers face */
  border: 1px solid #333; /* Slightly darker border */
  color: white;
  font-size: 2rem; /* Increased font size */
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5); /* Inner shadow */

  &.front  { transform: rotateY(0deg) translateZ(60px); }
  &.back   { transform: rotateY(180deg) translateZ(60px); }
  &.right  { transform: rotateY(90deg) translateZ(60px); }
  &.left   { transform: rotateY(-90deg) translateZ(60px); }
  &.top    { transform: rotateX(90deg) translateZ(60px); }
  &.bottom { transform: rotateX(-90deg) translateZ(60px); }
`;

const Dot = styled.div`
  position: absolute;
  width: 35px; /* Slightly larger dots */
  height: 35px; /* Slightly larger dots */
  background: radial-gradient(circle, #f00, #800); /* Gradient dots for more visual appeal */
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Shadow for dots */
  transform: translate(-50%, -50%);
`;
