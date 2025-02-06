import { useState } from 'react';
import './App.css';
import { Header, MainPlace } from './components';
import RotateEffect from './components/customs/rotateEffect';

function App() {
  const [whenLoading, setWhenLoading] = useState(true);
  const colorsToBeSwitched = ['red', 'green', 'brown', 'purple', 'blue', 'pink', 'black', 'orange', 'yellow', 'gray', 'white'];
  
  const getRandColor = () => colorsToBeSwitched[Math.floor(Math.random() * colorsToBeSwitched.length)];

  const [toBeGuessedColor, setToBeGuessedColor] = useState(getRandColor);
  const [resultInfo, setResultInfo] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = (color) => {
    if (color === toBeGuessedColor) {
      setResultInfo("Correct!");
      setToBeGuessedColor(getRandColor());
      setScore(prev => prev + 1);
    } else {
      setResultInfo("Wrong, Try Again!");
    }

    setTimeout(() => {
      setResultInfo("");
    }, 1000);
  };

  const startANewGame = () => {
    setToBeGuessedColor(getRandColor());
    setResultInfo("");
    setScore(0);
  };

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
