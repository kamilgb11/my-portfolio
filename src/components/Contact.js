import React from 'react';

function Contact({ lang }) {
  const translations = {
    en: {
      heading: "Let's work together",
      subheading: 'Find me on:',
    },
    pl: {
      heading: 'Zapraszam do współpracy',
      subheading: 'Znajdziesz mnie na:',
    },
  };

  return (
    <section id="contact-section">
      <h1 className="section-heading">{translations[lang].heading}</h1>
      <p>{translations[lang].subheading}</p>
      <p>
        <a href="https://github.com/kamilgb11"> <i className="fab fa-github"> GitHub</i> </a>
        <a href="https://www.linkedin.com/in/kamil-mientkiewicz-251b34269/"> <i className="fab fa-linkedin-in"> Linkedin</i> </a>
        <a href="mailto:kammmie9@gmail.com"> <i className="fas fa-envelope-square"> Email</i> </a>
      </p>
    </section>
  );
}

export default Contact;
