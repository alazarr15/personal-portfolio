import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import "./Navbar.css"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(true);
  }

  function CloseMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <div className={`headbar-container ${showMenu ? "openMenu" : ""}`}>
        <div className="headbar-middle">
          <div className="left-side">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="right-side">
            <ul className={`${showMenu ? "show-menu" : ""}`}>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
            <GiHamburgerMenu className="menu" onClick={toggleMenu} />
            <IoCloseSharp   className='close-menu' onClick={CloseMenu} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar