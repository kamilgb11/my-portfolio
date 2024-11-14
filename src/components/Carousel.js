import React from 'react';
import Slider from 'react-slick';

import certificate1 from './image1c.png';
import certificate2 from './image2bi.png';
import certificate3 from './aspnet.png';
import certificate4 from './pythoncer.png';
import certificate5 from './googleads.png';
import certificate6 from './excelfunkcje.png';
import certificate7 from './top10excel.png';
import certificate8 from './top10kadr.png';
import certificate9 from './msacces.png';
import certificate10 from './powerquery.png';
import certificate11 from './tabele.png';
import certificate12 from './aibiznes.png';


function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const certificates = [
    {
      img: certificate1,
      description: ['Operatory, zmienne, tablice', 'Klasy', 'Pętle', 'Sortowanie, rekurencje', 'Wektory',],
    },
    {
      img: certificate2,
      description: ['Tworzenie zapytań', 'Modyfikacja zapytań','Przydatne wskazówki do edycji zapytań', 'Modelowanie danych', 'Wizualizacja danych'],
    },
    {
      img: certificate3,
      description: ['Framework Entity', 'Autentykacje i autoryzacje (np. przez tokeny)','Azure', 'Continuous integration/delivery', 'Programy i pomoce (Postman, Swagger)'],
    },
    {
      img: certificate4,
      description: ['Podstawy pythona', 'Kurs w ramach zajęć na studiach'],
    },
    {
      img: certificate5,
      description: ['Analiza opłacalności reklam', 'Podstawy planowania kampanii reklamowych'],
    },
    {
      img: certificate6,
      description: ['Podstawy dla optymalizacji czasu pracy', 'Podstawy związanie z funkcjami'],
    },
    {
      img: certificate7,
      description: ['top 10 funkcji dla kadr'],
    },
    {
      img: certificate8,
      description: ['top 10 narzędzi dla kadr'],
    },
    {
      img: certificate9,
      description: ['Tworzenie i przetwarzanie danych', 'Formularze i zapytania'],
    },
    {
      img: certificate10,
      description: ['Power Query', 'Pobieranie danych z NBP'],
    },
    {
      img: certificate11,
      description: ['Tabele przestawne dla działów', 'księgowości i kadr'],
    },
    {
      img: certificate12,
      description: ['Podstawowe omówienie AI','Tworzenie własnego czatu na strone', 'Zastosowanie AI dla własnego biznesu'],
    },
  ];

  return (
    <section id="carousel-section">
      <h1 className="section-heading">Certificates</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <div key={index} className="image-box">
              <div className="carousel-content">
                <ul className="carousel-description">
                  {cert.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="carousel-image-container">
                  <img src={cert.img} alt={`Certificate ${index + 1}`} className="carousel-image" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
