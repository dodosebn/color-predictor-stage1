import React from "react";
import ColorOptBtn from "./customs/colorOptBtn";

const MainPlace = ({
  colorsToBeSwitched,
  toBeGuessedColor,
  handleGuess,
  startANewGame,
}) => {
  let hngRecomColors = [];

  while (hngRecomColors.length < 5) {
    const randColor =
      colorsToBeSwitched[Math.floor(Math.random() * colorsToBeSwitched.length)];
    if (!hngRecomColors.includes(randColor)) {
      hngRecomColors.push(randColor);
    }
  }

  // this should mk it 6(as requirement states)
  if (!hngRecomColors.includes(toBeGuessedColor)) {
    hngRecomColors.push(toBeGuessedColor);
  } else {
    hngRecomColors.push(
      colorsToBeSwitched[Math.floor(Math.random() * colorsToBeSwitched.length)]
    );
  }
  // shuffle mk the accurate soln dey diff spots
  hngRecomColors = hngRecomColors.sort(() => Math.random() - 0.7);

  return (
    <main>
      <div className="colorSelectCont">
        {hngRecomColors.map((color, index) => (
          <ColorOptBtn key={index} color={color} handleGuess={handleGuess} />
        ))}
      </div>
      <div className="restart">
        <button onClick={startANewGame}>New Game</button>
      </div>
    </main>
  );
};

export default MainPlace;
