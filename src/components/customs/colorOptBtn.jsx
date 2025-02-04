import React from 'react';

const ColorOptBtn = ({ color, handleGuess }) => {
  return (
    <button
      className="btnColorOp"
      style={{ backgroundColor: color }}
      onClick={() => handleGuess(color)}
    >
      {/* Button */}
    </button>
  );
};

export default ColorOptBtn;
