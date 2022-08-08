import { useContext } from 'react';
import '../assets/styles/startInformation.css';
import GameContext from '../context/GameContext';

function StartInformation() {
  return (
    <div className="pageContainer">
      <h1 className="startTitle">Search N64</h1>
      <div className="informationContainer">
        <div className="">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StartInformation;
