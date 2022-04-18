import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [isSlid, setIsSlid] = useState(false)

  function darkMode(){
    setIsClicked(isClicked => !isClicked) 
  }

  function slideNavBar(){
    setIsSlid(isSlid => !isSlid) 
    console.log(isSlid)
  }

  return (
    <div style={isClicked ? ({backgroundColor: 'aqua'}): ({backgroundColor: 'yellow'})}>
      <div className='sidebar'>
        <Navbar 
        darkMode={darkMode}
        isSlid={isSlid}
        />
      </div> 
      <div className='main-content'>
        <HomePage 
        isSlid={isSlid}
        slideNavBar={slideNavBar}
        />
      </div>
    </div>
  );
}

export default App;
