import { useContext } from 'react';
import gameImage from '../assets/images/N64.jpg';
import '../assets/styles/gameImage.css';
import GameContext from '../context/GameContext';

function GameImage() {
  const { gameStarted } = useContext(GameContext);

  return (
    <div className={gameStarted ? 'gameDiv' : 'gameDiv inactive'}>
      <img src={gameImage} alt="gameImage" className="gameImage" />
    </div>
  );
}
export default GameImage;
