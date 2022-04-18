import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import avatar from "../images/jaevin headshot.jpg"

export default function Navbar() { 

  return (
    <div className = "NavBar">
        <nav className="nav">
            <div className="profile">
                <img src={avatar} alt="Jaevin Reed"/>
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
                <button>Dark Mode</button>
        </nav>
    </div>
  )
}
