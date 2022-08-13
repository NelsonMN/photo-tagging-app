import '../assets/styles/gameOver.css';
import Loader from '../assets/images/loader.gif';
import { convertTime } from '../utils/timeConverter';
import { useState, useContext } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase.config';
import GameContext from '../context/GameContext';
import { useEffect } from 'react';

function GameOver() {
  const { time } = useContext(GameContext);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [btnDisabled, setButtonDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getN64Users = async () => {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, orderBy('time'), limit(10));
      const querySnapshot = await getDocs(q);

      let userArray = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        userArray.push([doc.id, doc.data()]);
      });
      setUserInfo(userArray);
      setLoading(false);
    };

    setTimeout(() => {
      getN64Users();
    }, 1200);
  }, []);

  const handleTextChange = (e) => {
    if (e.target.value === '') {
      setButtonDisabled(true);
      setName(e.target.value);
    } else {
      setButtonDisabled(false);
      setName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const date = new Date();
    const dateInSeconds = Math.floor(date.getTime() / 1000);

    const data = { name, time, dateInSeconds };

    // Add doc
  };

  return (
    <div className="gameOverPage">
      <h1 className="startTitle">Search N64</h1>
      <div className="gameOverDiv">
        <div className="gameOverInfoDiv">
          <h1>Congratulations! You've found all the characters!</h1>
          <h2>Your Time:</h2>
          <h1>{convertTime(time)}</h1>

          {submitted ? (
            <p>Thanks for playing!</p>
          ) : (
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
          )}
        </div>

        {loading ? (
          <img src={Loader} alt="loading"></img>
        ) : (
          <div className="scoreContainer">
            <h3 className="highScore">
              <strong>Highscores</strong>
            </h3>

            <ul className="scoreList">
              {userInfo.map((user) => (
                <li key={user[0]}>
                  <div className="score">
                    <p>{user[1].name}</p>
                    <p>{convertTime(user[1].time)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default GameOver;
