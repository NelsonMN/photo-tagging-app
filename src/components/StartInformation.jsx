import '../assets/styles/startInformation.css';
import GameImage from '../assets/images/N64.jpg';
import Koopa from '../assets/images/characters/koopa.jpg';
import Link from '../assets/images/characters/link.jpg';
import CaptainFalcon from '../assets/images/characters/captainFalcon.jpg';
import { useContext } from 'react';
import GameContext from '../context/GameContext';

function StartInformation() {
  const { handleStart } = useContext(GameContext);
  return (
    <div className="pageContainer">
      <h1 className="startTitle">Search N64</h1>
      <div className="startInformationContainer">
        <div className="startImageContainer">
          <img className="startImage" src={GameImage} alt="" />
        </div>
        <div className="startInstructionsContainer">
          <div>
            <h2>Nintendo 64</h2>
            <h4>Art By: Pierre Roussel</h4>
          </div>

          <p>Find all the characters below to win!</p>

          <div className="startCharacterContainer">
            <div className="startCharacter">
              <img src={Koopa} alt="koopa" />
              <div>
                <h3 className="characterTitle">Koopa</h3>
                <h5 className="characterOrigin">Super Mario</h5>
              </div>
            </div>
            <div className="startCharacter">
              <img src={Link} alt="link" />
              <div>
                <h3 className="characterTitle">Link</h3>
                <h5 className="characterOrigin">Zelda</h5>
              </div>
            </div>
            <div className="startCharacter">
              <img src={CaptainFalcon} alt="samus" />
              <div>
                <h3 className="characterTitle">Captain Falcon</h3>
                <h5 className="characterOrigin">F-Zero</h5>
              </div>
            </div>
          </div>

          <button onClick={handleStart} className="startGameButton">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
export default StartInformation;
