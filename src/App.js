import { useState } from 'react';
import './App.css';
import { Header, MainPlace } from './components';
import RotateEffect from './components/customs/rotateEffect';

function App() {
  const [whenLoading, setWhenLoading] = useState(true);
  const colorsToBeSwitched = [
    '#F1823B',
    '#9AC9C1',
    '#5D89E4',
    '#69892C',
    '#AF7351',
    '#8785E9',
    '#6B83BE',
    '#D7F18F',
    '#E8FF08',
    '#F2B181',
    '#E42FC6',
    '#0D16E6'
  ];
  
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
      setResultInfo("Wrong, Try Again!");
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
