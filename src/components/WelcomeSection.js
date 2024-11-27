import React from 'react';
import TypewriterEffect from './TypewriterEffect'; 

function WelcomeSection({ lang }) {
  const firstLine = lang === 'en' ? 'HHello!' : 'CCześć!';
  const secondLine = lang === 'en' ? 'II am Frontend Developer' : 'JJestem Frontend Developerem';

  return (
    <section id="welcome-section">
      <div className="message">
        <p>
          <TypewriterEffect key={firstLine} text={firstLine} speed={100} />
          <br />
          <TypewriterEffect key={secondLine} text={secondLine} speed={100} />
        </p>
      </div>
      <div className="message">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/07/13/53/binary-2380422_1280.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default WelcomeSection;