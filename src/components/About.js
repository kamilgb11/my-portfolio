import React from 'react';

function About({ lang }) {
  
  const translations = {
    en: {
      heading: "About Me",
      content: [
        "I am Kamil.",
        "I am a student.",
        "From the age of 9, I devoted a lot of time to my first computer, and I started my adventure with creating websites at the age of 12, mainly with PHP and HTML. At the same time, I was developing skills in other areas, including graphics, where I created signatures and my own layouts. In 2012, however, I chose mechatronics as the direction of further education, temporarily putting my passion aside. Currently, I am studying computer science in business as a front-end developer, at the same time I am taking courses in HTML, CSS, JavaScript, Python, and recently I have even become familiar with it. subject of .NET (VB, C++, ASP). I improve my skills every day, but the real step forward will be to start working in this direction, which I really hope for in the near future."
      ]
    },
    pl: {
      heading: "O mnie",
      content: [
        "Mam na imię Kamil.",
        "Jestem studentem.",
        "Od 9 roku życia poświęcałem dużo czasu na mój pierwszy komputer, a swoją przygodę z tworzeniem stron internetowych zacząłem w wieku 12 lat, głównie na PHP i HTML. Równocześnie w tym czasie rozwijałem umiejętności w innych obszarach, m.in grafika, gdzie tworzyłem sygnatury i własne layouty. W 2012 roku wybrałem jednak mechatronikę jako kierunek dalszej edukacji, tymczasowo odsuwając moją pasję na bok. Obecnie studiuję informatykę w biznesie jako front-end developer, jednocześnie uczęszczam na kursy HTML, CSS, JavaScript, Python a ostatnio nawet zapoznaje się z tematem .NET (VB, C++, ASP). Codziennie doskonale swoje umiejętności, jednak prawdziwym krokiem naprzód będzie rozpoczęcie pracy w tym kierunku, na co bardzo liczę w mam nadzieję niedalekiej przyszłości."
      ]
    }
  };

  
  const t = translations[lang];

  return (
    <section id="about-section">
      <h1 className="section-heading">{t.heading}</h1>
      <div className="about-container">
        <div className="message my-image">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt=""
          />
        </div>
        <div className="message my-information">
          {t.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
