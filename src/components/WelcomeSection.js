import React from 'react';

function WelcomeSection({ lang }) {
  return (
    <section id="welcome-section">
      <div className="message">
        <p>
          {lang === 'en' ? (
            <>Hello! <br /> I am Frontend Developer</>
          ) : (
            <>Cześć! <br /> Jestem Frontend Developerem</>
          )}
        </p>
      </div>
      <div className="message">
      <img src="https://cdn.pixabay.com/photo/2017/06/07/13/53/binary-2380422_1280.jpg" alt="" />
      </div>
    </section>
  );
}

export default WelcomeSection;
