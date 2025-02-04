import React from 'react'

const Header = () => {
  return (
    <div className='header_container'>
      <h1>Guess the Correct color!</h1>
      <div className="targetBoxContainer" >
      <div className='targetColorBox'></div>
      </div>
      <div className="checksaInfo">
        <p>Correct</p>
        <p>Score: 1</p>
      </div>
    </div>
  )
}

export default Header;
