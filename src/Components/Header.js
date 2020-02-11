import React from 'react';
import './style.css'
function Header() {
  return(
        <header>
          <div className="A">
          <img
            src='Trollface.png'
            alt='Problem?'
            className="Header"
          />
          <p className="HeaderText">Meme Generator</p>
          </div>
        </header>
      
  )
}
export default Header;