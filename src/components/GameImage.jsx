import { useContext } from 'react';
import gameImage from '../assets/images/N64.jpg';
import '../assets/styles/gameImage.css';
import GameContext from '../context/GameContext';

function GameImage() {
  const { gameStarted, handleImgClick } = useContext(GameContext);

  return (
    <div className={gameStarted ? 'gameDiv' : 'gameDiv inactive'}>
      <img
        onClick={handleImgClick}
        src={gameImage}
        alt="gameImage"
        className="gameImage"
      />
    </div>
  );
}
export default GameImage;
