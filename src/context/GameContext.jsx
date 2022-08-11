import { useEffect } from 'react';
import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [characterChoice, setCharacterChoice] = useState([]);
  const [choosing, setChoosing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  const [choice, setChoice] = useState({
    choice: null,
    coordinates: { x: 0, y: 0 },
    correct: false,
  });

  const [charactersRemaining, setCharactersRemaining] = useState([
    'Koopa',
    'Link',
    'C. Falcon',
  ]);

  const [calibratedCoordinates, setCalibratedCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (gameStarted) {
      setTimeout(() => setTime(time + 1), 1000);
    }

    return () => clearTimeout();
  }, [time, gameStarted]);

  const getCalibratedCoordinates = (e) => {
    const offset = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    const coordinateX = Math.floor((x / window.innerWidth) * 100);
    const coordinateY = Math.floor((y / window.innerWidth) * 100);
    setCalibratedCoordinates({ x: coordinateX, y: coordinateY });
  };

  const handleStart = () => {
    setGameStarted((prevState) => !prevState);
  };

  const handleImgClick = (e) => {
    getCalibratedCoordinates(e);
    setMousePosition({
      x: e.pageX - e.currentTarget.getBoundingClientRect().left,
      y: e.pageY - e.currentTarget.getBoundingClientRect().top,
    });
    setChoosing(true);
  };

  const handleChoice = (e) => {
    console.log('You have chosen', e.target.textContent);
    setChoosing(false);
  };

  return (
    <GameContext.Provider
      value={{
        charactersRemaining,
        gameStarted,
        time,
        choosing,
        mousePosition,
        handleImgClick,
        handleStart,
        handleChoice,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
