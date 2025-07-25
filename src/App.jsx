import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav';
import './App.css'
import Contact from './pages/Contact';

function App() {
  return (
    <div id="root">
      <Nav/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}



export default App
