import { useContext } from 'react';
import './assets/styles/app.css';
import GameHeader from './components/GameHeader';
import GameImage from './components/GameImage';
import Marker from './components/Marker';
import StartInformation from './components/StartInformation';
import GameContext from './context/GameContext';

function App() {
  const { gameStarted, choice } = useContext(GameContext);

  return (
    <div className={gameStarted ? 'app' : 'app inactive'}>
      <GameHeader />
      {choice.chosen ? (
        choice.correct ? (
          <p className="message">You found {choice.character}. Great job!</p>
        ) : (
          <p className="message">That's not {choice.character}. Try again!</p>
        )
      ) : (
        ''
      )}
      {!gameStarted && <StartInformation />}
      <GameImage />
      <Marker />
    </div>
  );
}

export default App;
