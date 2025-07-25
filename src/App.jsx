import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <div id="root">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}



export default App
