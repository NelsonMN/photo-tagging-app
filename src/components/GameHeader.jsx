import '../assets/styles/gameHeader.css';
import Koopa from '../assets/images/characters/koopa.jpg';
import Link from '../assets/images/characters/link.jpg';
import CaptainFalcon from '../assets/images/characters/captainFalcon.jpg';
import { useState, useContext } from 'react';
import GameContext from '../context/GameContext';
import { convertTime } from '../utils/timeConverter';
import { useEffect } from 'react';

function GameHeader() {
  const { charactersRemaining, gameStarted, gameOver, time } =
    useContext(GameContext);

  const [timerDisplay, setTimerDisplay] = useState(null);

  useEffect(() => {
    setTimerDisplay(convertTime(time));
  }, [time]);

  return (
    <div
      className={
        !gameStarted || gameOver
          ? 'headerContainer inactive'
          : 'headerContainer'
      }
    >
      <h1 className="headerTitle">Search N64</h1>

      <div className="charactersContainer">
        <div className="characterContainer">
          <img
            src={Koopa}
            alt="koopa"
            className={
              charactersRemaining.includes('Koopa')
                ? 'character'
                : 'character found'
            }
          />
          <p
            style={
              charactersRemaining.includes('Koopa')
                ? {}
                : { textDecoration: 'line-through', opacity: '0.2' }
            }
          >
            Koopa
          </p>
        </div>
        <div className="characterContainer">
          <img
            src={Link}
            alt="link"
            className={
              charactersRemaining.includes('Link')
                ? 'character'
                : 'character found'
            }
          />
          <p
            style={
              charactersRemaining.includes('Link')
                ? {}
                : { textDecoration: 'line-through', opacity: '0.2' }
            }
          >
            Link
          </p>
        </div>
        <div className="characterContainer">
          <img
            src={CaptainFalcon}
            alt="captain falcon"
            className={
              charactersRemaining.includes('C. Falcon')
                ? 'character'
                : 'character found'
            }
          />
          <p
            style={
              charactersRemaining.includes('C. Falcon')
                ? {}
                : { textDecoration: 'line-through', opacity: '0.2' }
            }
          >
            C. Falcon
          </p>
        </div>
      </div>
      <div className="timerContainer">
        <p className={gameStarted ? 'timer' : 'timer inactive'}>
          {timerDisplay}
        </p>
      </div>
    </div>
  );
}
export default GameHeader;
