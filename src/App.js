import React, { useContext } from 'react';
import './assets/styles/app.css';
import GameHeader from './components/GameHeader';
import GameImage from './components/GameImage';
import CursorMarker from './components/CursorMarker';
import GameStart from './components/GameStart';
import GameOver from './components/GameOver';
import GameContext from './context/GameContext';

function App() {
  const { gameStarted, gameOver, choice } = useContext(GameContext);

  return (
    <div className={!gameStarted || gameOver ? 'app inactive' : 'app'}>
      <GameHeader />
      {choice.chosen &&
        !gameOver &&
        (choice.correct ? (
          <p className="message">You found {choice.character}. Great job!</p>
        ) : (
          <p className="message">
            That&apos;s not {choice.character}. Try again!
          </p>
        ))}
      {!gameStarted && <GameStart />}
      {gameOver && <GameOver />}
      <GameImage />
      <CursorMarker />
    </div>
  );
}

export default App;
