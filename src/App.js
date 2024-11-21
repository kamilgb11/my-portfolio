import React, { useState } from 'react';
import Navbar from './components/Navbar';
import IntroImage from './components/IntroImage';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Skills from './components/Skills';
import Carousel from './components/Carousel';
import Contact from './components/Contact';

function App() {
  const [lang, setLang] = React.useState('pl');

  const toggleLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <div>
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <IntroImage />
      <WelcomeSection lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Carousel lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}

export default App;
