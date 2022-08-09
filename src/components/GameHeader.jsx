import '../assets/styles/gameHeader.css';
import Koopa from '../assets/images/characters/koopa.jpg';
import Link from '../assets/images/characters/link.jpg';
import CaptainFalcon from '../assets/images/characters/captainFalcon.jpg';
import { useState, useContext } from 'react';
import GameContext from '../context/GameContext';
import { convertTime } from '../utils/timeConverter';
import { useEffect } from 'react';

function GameHeader() {
  const { gameStarted, time } = useContext(GameContext);

  const [timerDisplay, setTimerDisplay] = useState(null);

  useEffect(() => {
    setTimerDisplay(convertTime(time));
  }, [time]);

  return (
    <div
      className={gameStarted ? 'headerContainer' : 'headerContainer inactive'}
    >
      <h1 className="headerTitle">Search N64</h1>

      <div className="charactersContainer">
        <div className="characterContainer">
          <img src={Koopa} alt="koopa" className="character" />
          <p>Koopa</p>
        </div>
        <div className="characterContainer">
          <img src={Link} alt="link" className="character" />
          <p>Link</p>
        </div>
        <div className="characterContainer">
          <img src={CaptainFalcon} alt="captain falcon" className="character" />
          <p>C. Falcon</p>
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
