import '../assets/styles/gameHeader.css';
import koopa from '../assets/images/characters/koopa.jpg';
import link from '../assets/images/characters/link.jpg';
import samus from '../assets/images/characters/samus.jpg';

function GameHeader() {
  return (
    <div className="headerContainer">
      <h1 className="headerTitle">Search 64</h1>

      <div className="charactersContainer">
        <img src={koopa} alt="koopa" className="character" />
        <img src={link} alt="link" className="character" />
        <img src={samus} alt="samus" className="character" />
      </div>

      <p className="timer">0:00:00</p>
    </div>
  );
}
export default GameHeader;
