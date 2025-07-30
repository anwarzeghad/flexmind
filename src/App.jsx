import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Nav from './components/Nav';
import './App.css';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Formulaire from './pages/Formulaire';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Services />
      <Faq />
      <Formulaire />
      <Contact />
    </div>
  );
}

export default App;
