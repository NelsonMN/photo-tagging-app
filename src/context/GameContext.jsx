import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [characterChoice, setCharacterChoice] = useState([]);
  const [choosing, setChoosing] = useState({
    choice: null,
    coordinates: { x: 0, y: 0 },
    correct: false,
  });

  const [charactersRemaining, setCharactersRemaining] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [time, setTime] = useState(0);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <GameContext.Provider value={{ gameStarted, startGame }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
