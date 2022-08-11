import { useEffect } from 'react';
import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [characterChoice, setCharacterChoice] = useState([]);

  const [toggle, setToggle] = useState(false);

  const [choosing, setChoosing] = useState({
    choice: null,
    coordinates: { x: 0, y: 0 },
    correct: false,
  });

  const [charactersRemaining, setCharactersRemaining] = useState([
    'Koopa',
    'Link',
    'Captain Falcon',
  ]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (gameStarted) {
      setTimeout(() => setTime(time + 1), 1000);
    }

    return () => clearTimeout();
  }, [time, gameStarted]);

  const getCoordinates = (e) => {
    const offset = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    const coordinateX = Math.floor((x / window.innerWidth) * 100);
    const coordinateY = Math.floor((y / window.innerWidth) * 100);
    setMousePosition({ x: coordinateX, y: coordinateY });
  };

  const handleStart = () => {
    setGameStarted((prevState) => !prevState);
  };

  const handleClick = (e) => {
    getCoordinates(e);
  };

  return (
    <GameContext.Provider
      value={{ gameStarted, toggle, time, handleClick, handleStart }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
