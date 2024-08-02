import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
}

export default App;