import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false)

  function darkMode(){
    setIsClicked(isClicked => !isClicked) 
    console.log(isClicked)
  }

  return (
    <div style={isClicked ? ({backgroundColor: 'aqua'}): ({backgroundColor: 'yellow'})}>
      <div className='sidebar'>
        <Navbar darkMode={darkMode}/>
      </div> 
      <div className='main-content'>
        <HomePage isClicked={isClicked}/>
      </div>
    </div>
  );
}

export default App;
