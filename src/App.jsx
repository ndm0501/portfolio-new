import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Credits from './components/Credits/Credits';
import Footer from './components/Footer/Footer';

function App() {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Footer setShowCreditsModal={setShowCreditsModal} />
        {showCreditsModal ? <Credits setShowCreditsModal={setShowCreditsModal} /> : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
