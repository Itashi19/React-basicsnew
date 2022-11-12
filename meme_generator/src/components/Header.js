import React from 'react'
import "../styles.css";
import face from "../images/face.png";
function Header() {
  return (
    <>
    <div className='header'>
    <img src={face} className="header--image" alt="nf"/>
    <h2 className='header--title'>Meme Generator</h2>
    </div>
    </>
  )
}

export default Header