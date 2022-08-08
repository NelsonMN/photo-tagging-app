import '../assets/styles/gameHeader.css';
import koopa from '../assets/images/characters/koopa.jpg';
import link from '../assets/images/characters/link.jpg';
import samus from '../assets/images/characters/samus.jpg';

function GameHeader() {
  return (
    <div className="headerContainer">
      <h1 className="headerTitle">Search 64</h1>

      <div className="charactersContainer">
        <div className="characterContainer">
          <img src={koopa} alt="koopa" className="character" />
          <p>Koopa</p>
        </div>
        <div className="characterContainer">
          <img src={link} alt="link" className="character" />
          <p>Link</p>
        </div>
        <div className="characterContainer">
          <img src={samus} alt="samus" className="character" />
          <p>Samus</p>
        </div>
      </div>

      <p className="timer">0:00:00</p>
    </div>
  );
}
export default GameHeader;
