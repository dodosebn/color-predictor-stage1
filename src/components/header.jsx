import React from "react";

const Header = ({ toBeGuessedColor, resultInfo, score }) => {
  return (
    <div className="header_container">
      <h1 data-testid="gameInstructions">Guess the Correct Color!</h1>
      <div className="targetBoxContainer">
        <div
          className="targetColorBox"
          style={{ backgroundColor: toBeGuessedColor }}
          data-testid="colorBox"
        ></div>
      </div>
      <div className="checksaInfo">
        <p className={`${resultInfo === 'Wrong, Try Again!' ? 'wrongResult' : 'rightResult'} resultInfo`} data-testid="gameStatus">
          {resultInfo}
        </p>
        <p data-testid="score">Score: {score}</p>
      </div>
    </div>
  );
};

export default Header;
