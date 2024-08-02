import StartGame from "./components/StartGame";
import { useState, useEffect } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(() => {
    return localStorage.getItem('isGameStarted') === 'true';
  });

  const [highScore, setHighScore] = useState(() => {
    const savedHighScore = localStorage.getItem('highScore');
    return savedHighScore !== null ? parseInt(savedHighScore, 10) : 0;
  });

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  const endGame = (currentScore) => {
    setIsGameStarted(false);
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem('highScore', currentScore.toString());
    }
    localStorage.setItem('isGameStarted', 'false');
    localStorage.removeItem('score'); // Clear the ongoing score
  };

  useEffect(() => {
    localStorage.setItem('isGameStarted', isGameStarted.toString());
  }, [isGameStarted]);

  return (
    <>
      {isGameStarted ? (
        <GamePlay endGame={endGame} />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} highScore={highScore} />
      )}
    </>
  );
}

export default App;
