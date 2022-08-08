import { useContext } from 'react';
import '../assets/styles/startInformation.css';
import GameContext from '../context/GameContext';
import GameImage from '../assets/images/N64.jpg';
import Koopa from '../assets/images/characters/koopa.jpg';
import Link from '../assets/images/characters/link.jpg';
import Samus from '../assets/images/characters/samus.jpg';

function StartInformation() {
  return (
    <div className="pageContainer">
      <h1 className="startTitle">Search N64</h1>
      <div className="startInformationContainer">
        <div className="startContentContainer">
          <div className="startImageContainer">
            <img className="startImage" src={GameImage} alt="" />
          </div>
          <div className="startInstructionsContainer">
            <h2>Nintendo 64</h2>
            <h4>By: Pierre Roussel</h4>
            <p>Find all the characters below to win!</p>
            <div className="startCharacterContainer">
              <img src={Koopa} alt="koopa" />
              <img src={Link} alt="link" />
              <img src={Samus} alt="samus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StartInformation;
