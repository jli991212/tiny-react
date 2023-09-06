//import logo from './logo.svg';
import React,{useState} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className="App">
    <Navbar/>
   <Contact/>
    </div>
  );
}

export default App;
