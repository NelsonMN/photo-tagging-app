import { useState, useContext } from 'react';
import GameContext from '../context/GameContext';
import '../assets/styles/marker.css';

function Marker() {
  const { charactersRemaining, choosing, mousePosition, handleChoice } =
    useContext(GameContext);

  return (
    choosing && (
      <div
        className="markerContainer"
        style={{ top: mousePosition.y, left: mousePosition.x }}
      >
        <div className="marker"></div>
        <ul className="characterList">
          {charactersRemaining.map((character, index) => (
            <li key={index} onClick={handleChoice} className="characterName">
              {character}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
export default Marker;
