import '../assets/styles/gameOver.css';
import Loader from '../assets/images/loader.gif';
import { convertTime } from '../utils/timeConverter';
import { useState, useContext } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
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
        userArray.push([doc.id, doc.data()]);
      });
      setUserInfo(userArray);
      setLoading(false);
    };

    setTimeout(() => {
      getN64Users();
    }, 1200);
  }, [submitted]);

  const handleTextChange = (e) => {
    if (e.target.value === '') {
      setButtonDisabled(true);
      setName(e.target.value);
    } else {
      setButtonDisabled(false);
      setName(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const usersRef = collection(db, 'users');
    const data = { name, time };
    await addDoc(usersRef, data);

    setLoading(true);
  };

  return (
    <div className="gameOverPage">
      <h1 className="startTitle">Search N64</h1>
      <div className="gameOverDiv">
        <div className="gameOverInfoDiv">
          <h1 className="congrats">Congratulations! You've Won!</h1>
          <h2 className="timeDiv">Your Time: {convertTime(time)}</h2>

          {submitted ? (
            <h1 className="thanks">Thanks for playing!</h1>
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
            <h3 className="highScore">Highscores</h3>

            <ul className="scoreList">
              {userInfo.map((user) => (
                <li key={user[0]}>
                  <div className="scoreDiv">
                    <p className="userName">{user[1].name}</p>
                    <p className="score">{convertTime(user[1].time)}</p>
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
