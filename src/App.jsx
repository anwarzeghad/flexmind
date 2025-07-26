import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Nav from './components/Nav';
import './App.css'
import Contact from './pages/Contact';
import { Scroll } from 'lucide-react'
import ScrollProgress from './components/ScrollProgress'
import Faq from './pages/Faq'

function App() {
  return (
    <div id="root">
      {/*<ScrollProgress/>*/}
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Faq/>
      <Contact/>
    </div>
  );
}



export default App
