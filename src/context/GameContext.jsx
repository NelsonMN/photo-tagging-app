import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const [characterChoice, setCharacterChoice] = useState([]);

  const [toggle, setToggle] = useState(false);
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

  const getCoordinates = (e) => {
    const offset = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    const coordinateX = Math.floor((x / window.innerWidth) * 100);
    const coordinateY = Math.floor((y / window.innerWidth) * 100);
    console.log(coordinateX, coordinateY);
  };

  return (
    <GameContext.Provider
      value={{ gameStarted, startGame, toggle, getCoordinates }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
