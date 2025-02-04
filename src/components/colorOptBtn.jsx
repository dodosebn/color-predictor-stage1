import React from 'react';

const ColorOptBtn = ({ color }) => {
  return (
    <div>
      <button
        className="btnColorOp"
        style={{ backgroundColor: color }}
      >
        {/* Button */}
      </button>
    </div>
  );
};

export default ColorOptBtn;
