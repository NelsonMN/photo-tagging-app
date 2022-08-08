import { useContext } from 'react';
import './assets/styles/app.css';
import GameHeader from './components/GameHeader';
import GameImage from './components/GameImage';
import StartInformation from './components/StartInformation';
import GameContext from './context/GameContext';

function App() {
  const { gameStarted } = useContext(GameContext);

  return (
    <div className={gameStarted ? 'app' : 'app inactive'}>
      <GameHeader />
      {!gameStarted && <StartInformation />}
      <GameImage />
    </div>
  );
}

export default App;
