import React from 'react';
import Typewriter from 'typewriter-effect';

function WelcomeSection({ lang }) {
  return (
    <section id="welcome-section">
      <div className="message">
        <p>
          <Typewriter
            options={{
              strings: lang === 'en'
                ? ['Hello!', 'I am Frontend Developer']
                : ['Cześć!', 'Jestem Frontend Developerem'],
              autoStart: true,
              loop: true, 
              delay: 85, 
              deleteSpeed: 50, 
              cursor: '|', 
            }}
          />
        </p>
      </div>
      <div className="message">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/07/13/53/binary-2380422_1280.jpg"
          alt="binary"
        />
      </div>
    </section>
  );
}

export default WelcomeSection;
