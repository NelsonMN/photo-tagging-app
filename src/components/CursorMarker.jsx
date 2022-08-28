import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
import '../assets/styles/marker.css';

function CursorMarker() {
  const {
    charactersRemaining,
    choosing,
    mousePosition,
    handleChoice,
    setChoice,
    gameOver,
  } = useContext(GameContext);

  if (gameOver) {
    return;
  }

  return (
    choosing && (
      <div
        className="markerContainer"
        style={{ top: mousePosition.y, left: mousePosition.x }}
      >
        <div className="marker"></div>
        <ul className="characterList">
          {charactersRemaining.map((character, index) => (
            <li
              key={index}
              onClick={(e) => {
                setChoice(true);
                handleChoice(e);
              }}
              className="characterName"
            >
              {character}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
export default CursorMarker;
