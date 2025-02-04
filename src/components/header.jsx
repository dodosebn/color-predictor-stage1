import React from "react";

const Header = ({ toBeGuessedColor, resultInfo, score }) => {
  return (
    <div className="header_container">
      <h1>Guess the Correct Color!</h1>
      <div className="targetBoxContainer">
        <div
          className="targetColorBox"
          style={{ backgroundColor: toBeGuessedColor }}
        ></div>
      </div>
      <div className="checksaInfo">
        <p>{resultInfo}</p>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Header;
