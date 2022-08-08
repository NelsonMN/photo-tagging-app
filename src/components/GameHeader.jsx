import '../assets/styles/gameHeader.css';
import Koopa from '../assets/images/characters/koopa.jpg';
import Link from '../assets/images/characters/link.jpg';
import Samus from '../assets/images/characters/samus.jpg';
import { useContext } from 'react';
import GameContext from '../context/GameContext';

function GameHeader() {
  const { gameStarted } = useContext(GameContext);

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
          <img src={Samus} alt="samus" className="character" />
          <p>Samus</p>
        </div>
      </div>

      <p className={gameStarted ? 'timer' : 'timer inactive'}>0:00:00</p>
    </div>
  );
}
export default GameHeader;
