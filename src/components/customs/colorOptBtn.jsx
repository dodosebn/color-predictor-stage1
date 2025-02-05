import React from 'react';

const ColorOptBtn = ({ color, handleGuess }) => {
  return (
    <button
      className="btnColorOp"
      style={{ backgroundColor: color }}
      onClick={() => handleGuess(color)}
      data-testid="colorOption"
    >
      {/* Button */}
    </button>
  );
};

export default ColorOptBtn;
