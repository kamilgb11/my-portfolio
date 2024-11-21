import React, { useState } from 'react';
import plFlag from './plflag.png'; 
import enFlag from './enflag.png'; 

function Navbar({ lang, toggleLanguage }) {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowLanguageDropdown((prev) => !prev);
  };

  return (
    <nav id="navbar">
      <ul>
        <li><a href="#welcome-section">{lang === 'en' ? 'Home' : 'Start'}</a></li>
        <li><a href="#about-section">{lang === 'en' ? 'About' : 'O mnie'}</a></li>
        <li><a href="#skill-section">{lang === 'en' ? 'Skills' : 'Umiejętności'}</a></li>
        <li><a href="#carousel-section">{lang === 'en' ? 'Certificates' : 'Certyfikaty'}</a></li>
        <li><a href="#contact-section">{lang === 'en' ? 'Contact' : 'Kontakt'}</a></li>
        <li className="language-selector">
          <img
            src={lang === 'pl' ? plFlag : enFlag}
            alt={lang === 'pl' ? 'Polish Flag' : 'British Flag'}
            className="flag-icon"
            onClick={toggleDropdown}
          />
          {showLanguageDropdown && (
            <ul className="language-dropdown">
              <li onClick={() => { toggleLanguage('pl'); setShowLanguageDropdown(false); }}>
                <img src={plFlag} alt="Polish Flag" className="flag-icon" />
              </li>
              <li onClick={() => { toggleLanguage('en'); setShowLanguageDropdown(false); }}>
                <img src={enFlag} alt="British Flag" className="flag-icon" />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;