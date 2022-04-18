import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import avatar from "../images/jaevin headshot.jpg"

export default function Navbar({darkMode, isSlid}) { 

  return (
    <div className = "NavBar" style={isSlid ? ({left: '-25%'}) : ({left: '0px'})}>
        <nav className="nav">
            <div className="profile">
                <img src={avatar} alt="Jaevin Reed"/>
                <h2>Jaevin Reed</h2>
            </div>
            <ul className="nav-item"> 
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    Blog
                </li>
                <li className="nav-item">
                    Contact Me
                </li>
            </ul>
        </nav>
            <footer className="footer">
                <button onClick={darkMode} >
                Dark Mode
                </button>
            </footer>
    </div>
  )
}
