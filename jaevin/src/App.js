import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

//images
import img1 from "../images/IMG_1922.jpg"
import img2 from "../images/IMG_1924.jpg"
import img3 from "../images/IMG_1926.jpg"

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
      <div  className="darkmode-btn" onClick={slideNavBar} style={isSlid ? ({marginLeft: '1%'}): ({marginLeft: '26%'})}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>   
      <div className='container'>    
        <div className='main-content'>
          <HomePage 
          isSlid={isSlid}
          slideNavBar={slideNavBar}
          img1={img1}
          img2={img2}
          img3={img3}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
