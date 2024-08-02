import { useState, useEffect } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedGameState = localStorage.getItem("isGameStarted");
    if (savedGameState) {
      setIsGameStarted(JSON.parse(savedGameState));
    }

    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
      setHighScore(JSON.parse(savedHighScore));
    }
  }, []);

  const startGame = () => {
    setIsGameStarted(true);
  };

  const endGame = () => {
    setIsGameStarted(false);
  };

  const updateHighScore = (score) => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", JSON.stringify(score));
    }
  };

  return (
    <>
      {isGameStarted ? (
        <GamePlay endGame={endGame} updateHighScore={updateHighScore} />
      ) : (
        <StartGame toggleGamePlay={startGame} highScore={highScore} />
      )}
    </>
  );
}

export default App;
