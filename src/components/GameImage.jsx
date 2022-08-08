import gameImage from '../assets/images/N64.jpg';
import '../assets/styles/gameImage.css';

function GameImage() {
  return (
    <div className="gameDiv">
      <img src={gameImage} alt="gameImage" className="gameImage" />
    </div>
  );
}
export default GameImage;
