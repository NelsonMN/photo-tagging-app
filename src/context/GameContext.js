import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(true);
  const [gameOver, setGameOver] = useState(true);

  const [choosing, setChoosing] = useState(false);
  const [choice, setChoice] = useState({
    character: null,
    correct: false,
    chosen: false,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

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
    if (gameStarted && !gameOver) {
      setTimeout(() => setTime(time + 1), 1000);
    }
  }, [time, gameStarted, gameOver]);

  useEffect(() => {
    if (choice.chosen) {
      const timer = setTimeout(() => {
        setChoice({ character: null, correct: false, chosen: false });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [choice]);

  useEffect(() => {
    if (charactersRemaining.length === 0) {
      setGameOver(true);
    }
  }, [charactersRemaining, gameOver]);

  const getCalibratedCoordinates = (e) => {
    const offset = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    const coordinateX = Math.floor((x / window.innerWidth) * 100);
    const coordinateY = Math.floor((y / window.innerWidth) * 100);

    return { x: coordinateX, y: coordinateY };
  };

  const getCharacterData = async (char) => {
    const charRef = doc(db, 'characters', char);
    const charSnapShot = await getDoc(charRef);

    return charSnapShot.data().coordinates;
  };

  // Checks db if coordinates match player's choice
  const checkForMatch = async (e) => {
    const charCoordinates = await getCharacterData(e.target.textContent);

    return (
      charCoordinates.x.includes(calibratedCoordinates.x) &&
      charCoordinates.y.includes(calibratedCoordinates.y)
    );
  };

  const handleStart = () => {
    setGameStarted((prevState) => !prevState);
  };

  const handleImgClick = (e) => {
    setCalibratedCoordinates(getCalibratedCoordinates(e));

    setMousePosition({
      x: e.pageX - e.currentTarget.getBoundingClientRect().left,
      y: e.pageY - e.currentTarget.getBoundingClientRect().top,
    });

    setChoosing(true);
  };

  // If result is a match, remove it from charactersRemaining
  const handleChoice = async (e) => {
    const result = await checkForMatch(e);

    setChoice({
      character: e.target.textContent,
      correct: result,
      chosen: true,
    });

    if (result) {
      setCharactersRemaining((prevState) =>
        prevState.filter((char) => char !== e.target.textContent)
      );
    }

    setChoosing(false);
  };

  const handlePlayAgain = () => {
    setGameOver(false);
    setGameStarted(false);
    setTime(0);
    setCharactersRemaining(['Koopa', 'Link', 'C. Falcon']);
  };

  return (
    <GameContext.Provider
      value={{
        charactersRemaining,
        choice,
        gameStarted,
        gameOver,
        time,
        choosing,
        mousePosition,
        setChoice,
        handleImgClick,
        handleStart,
        handleChoice,
        handlePlayAgain,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
