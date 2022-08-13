import '../assets/styles/gameOver.css';
import { useState, useContext } from 'react';
import GameContext from '../context/GameContext';
import { convertTime } from '../utils/timeConverter';

function GameOver() {
  const { time } = useContext(GameContext);

  const [name, setName] = useState('');
  const [btnDisabled, setButtonDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (e.target.value === '') {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
      setName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="gameOverPage">
      <h1 className="startTitle">Search N64</h1>
      <div className="gameOverDiv">
        <h1>Congratulations! You've found all the characters!</h1>
        <h2>Your Time:</h2>
        <h1>{convertTime(time)}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleTextChange}
            placeholder="Enter Your Name"
          />
          <button className="startGameButton" disabled={btnDisabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default GameOver;
