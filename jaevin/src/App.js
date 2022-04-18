import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <div className='sidebar'>
        <Navbar/>
      </div> 
      <div className='main-content'>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
