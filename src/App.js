import { useContext } from 'react';
import './assets/styles/app.css';
import GameHeader from './components/GameHeader';
import GameImage from './components/GameImage';
import Marker from './components/Marker';
import StartInformation from './components/StartInformation';
import GameContext from './context/GameContext';

function App() {
  const { gameStarted } = useContext(GameContext);

  return (
    <div className={gameStarted ? 'app' : 'app inactive'}>
      <GameHeader />
      {!gameStarted && <StartInformation />}
      <GameImage />
      <Marker />
    </div>
  );
}

export default App;
