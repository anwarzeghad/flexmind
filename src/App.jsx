import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Nav from './components/Nav';
import './App.css';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Formulaire from './pages/Formulaire';
import { TranslationContext } from './context/TranslationContext';
import useTranslation from './hooks/useTranslation';

function App() {
  const translation = useTranslation();

  return (
    <TranslationContext.Provider value={translation}>
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Services />
        <Faq />
        <Formulaire />
        <Contact />
      </div>
    </TranslationContext.Provider>
  );
}

export default App;