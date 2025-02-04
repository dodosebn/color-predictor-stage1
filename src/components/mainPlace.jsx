import React from 'react'
import ColorOptBtn from './colorOptBtn';
const MainPlace = () => {
  return (
    <main>
      <div className="colorSelectCont">
<ColorOptBtn color='red' />
<ColorOptBtn color='green' />
<ColorOptBtn color='black' />
<ColorOptBtn color='purple' />
<ColorOptBtn color='pink' />
<ColorOptBtn color='white' />
</div>
<div className="restart">
  <button>New Game</button>
</div>
    </main>
      
  )
}

export default MainPlace;
