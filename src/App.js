import { useState } from 'react';
import './App.css';
import { Header, MainPlace } from './components';
import RotateEffect from './components/customs/rotateEffect';

function App() {
  const [whenLoading, setWhenLoading] = useState(true);
  const colorsToBeSwitched = ['#B22222', '#DC143C', '#FF8C00', '#FF7F50', '#FFD700', '#F0E68C', '#20B2AA', '#40E0D0', '#7B68EE', '#6A5ACD', '#BC8F8F', '#DB7093', '#4682B4', '#8A2BE2', '#A52A2A', '#5F9EA0', '#D2691E', '#FF1493'];


  const getRandColor = () => colorsToBeSwitched[Math.floor(Math.random() * colorsToBeSwitched.length)];

  const [toBeGuessedColor, setToBeGuessedColor] = useState(getRandColor);
  const [resultInfo, setResultInfo] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = (color) => {
    if (color === toBeGuessedColor) {
      setResultInfo("Correct!");
      setToBeGuessedColor(getRandColor());
      setScore(formal => formal + 1);
    } else {
      setResultInfo("Wrong! Try Again.");
    }
  };

  const startANewGame = () => {
    setToBeGuessedColor(getRandColor());
    setResultInfo("");
    setScore(0);
  }

  return (
    <div className="App">
      <RotateEffect whenLoading={whenLoading} setWhenLoading={setWhenLoading} />
      <div className={`${whenLoading ? 'loading-none' : 'loading-dey'} gameCarrier`}>
        <Header toBeGuessedColor={toBeGuessedColor} resultInfo={resultInfo} score={score} />
        <MainPlace colorsToBeSwitched={colorsToBeSwitched} toBeGuessedColor={toBeGuessedColor} handleGuess={handleGuess} startANewGame={startANewGame} />
      </div>
    </div>
  );
}

export default App;
