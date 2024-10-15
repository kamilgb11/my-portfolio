import React from 'react';
import Navbar from './components/Navbar';
import IntroImage from './components/IntroImage';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Skills from './components/Skills';
import Carousel from './components/Carousel';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <IntroImage />
      <WelcomeSection />
      <About />
      <Skills />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
