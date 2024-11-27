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

function Carousel({ lang }) {
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
      description: lang === 'en'
        ? ['Operators, variables, arrays', 'Classes', 'Loops', 'Sorting, recursion', 'Vectors']
        : ['Operatory, zmienne, tablice', 'Klasy', 'Pętle', 'Sortowanie, rekurencje', 'Wektory'],
    },
    {
      img: certificate2,
      description: lang === 'en'
        ? ['Creating queries', 'Modifying queries', 'Tips for editing queries', 'Data modeling', 'Data visualization']
        : ['Tworzenie zapytań', 'Modyfikacja zapytań', 'Przydatne wskazówki do edycji zapytań', 'Modelowanie danych', 'Wizualizacja danych'],
    },
    {
      img: certificate3,
      description: lang === 'en'
        ? ['Entity Framework', 'Authentication and authorization (e.g., via tokens)', 'Azure', 'Continuous integration/delivery', 'Tools and utilities (Postman, Swagger)']
        : ['Framework Entity', 'Autentykacje i autoryzacje (np. przez tokeny)', 'Azure', 'Continuous integration/delivery', 'Programy i pomoce (Postman, Swagger)'],
    },
    {
      img: certificate4,
      description: lang === 'en'
        ? ['Basics of Python', 'University course']
        : ['Podstawy pythona', 'Kurs w ramach zajęć na studiach'],
    },
    {
      img: certificate5,
      description: lang === 'en'
        ? ['Ad profitability analysis', 'Google Ads conversion definition', 'Measuring Google Ads effectiveness', 'Basics of advertising campaign planning', 'Overview of the conversion report in Analytics 4']
        : ['Analiza opłacalności reklam', 'Definicja konwersji Google Ads', 'Mierzenie efektywności Google Ads', 'Podstawy planowania kampanii reklamowych', 'Omówienie raportu konwersji w Analytics 4'],
    },
    {
      img: certificate6,
      description: lang === 'en'
        ? ['Correct planning of work on the formula', 'Basics related to functions', 'The difference between function and formula', 'Correct reading and analysis of functions', 'Selection of appropriate components']
        : ['Poprawne zaplanowanie pracy nad formułą', 'Podstawy związanie z funkcjami', 'Różnica funkcja vs formuła', 'Poprawne czytanie i analizowanie funkcji', 'Dobór odpowiednich składowych'],
    },
    {
      img: certificate7,
      description: lang === 'en'
        ? ['Search and logical functions', 'Date and time functions', 'Representation of counting functions:', 'Aggregate', 'Sum/Count/Average']
        : ['Funkcje przeszukujące i logiczne', 'Funkcje daty i czasu', 'Przedstawienie funkcji liczących:', 'Agreguj', 'Suma/Licz/Średnia'],
    },
    {
      img: certificate8,
      description: lang === 'en'
        ? ['Key keyboard shortcuts', 'Self-check formula correctness', 'Conditional formatting', 'Flash fill', 'Data validation and pivot tables']
        : ['Kluczowe skróty klawiszowe', 'Samodzielna weryfikacja poprawności formuł', 'Formatowanie warunkowe', 'Wypełnianie błyskawiczne', 'Poprawność danych i tabele przestawne'],
    },
    {
      img: certificate9,
      description: lang === 'en'
        ? ['Creating and processing data', 'Designing tables in MS Access', 'Forms and queries', 'Overview of table field properties', 'Creating one-to-many relationships']
        : ['Tworzenie i przetwarzanie danych','Projektowanie tabel w MS Acces', 'Formularze i zapytania', 'Omówienie właściwości pól tabeli', 'Tworzenie relacji jeden do wielu'],
    },
    {
      img: certificate10,
      description: lang === 'en'
        ? ['PowerQuerry API KRS', 'Downloading data from the National Bank of Poland', 'Cooperation with other domestic entities', 'Downloading historical data', 'Other useful functions']
        : ['PowerQuerry API KRS', 'Pobieranie danych z NBP', 'Współpraca z innmi podmiotami krajowymi', 'Pobieranie danych historycznych', 'Inne przydatne funkcje'],
    },
    {
      img: certificate11,
      description: lang === 'en'
        ? ['Explaining the definition of pivot tables', 'Styling a pivot table', 'How to hide empty rows', 'How to choose a report layout for the data', 'Report optimization']
        : ['Wyjaśnienie definicji tabel przestawnych', 'Stylowanie tabeli przestawnej', 'Jak ukrywać puste wiersze', 'Jak dobrać układ raportu do danych', 'Optymalizacja raportów'],
    },
    {
      img: certificate12,
      description: lang === 'en'
        ? ['Basic overview of AI', 'Creating your own chat on the website', 'Application of AI for your own business', 'Work automation', 'Saving time']
        : ['Podstawowe omówienie AI', 'Tworzenie własnego czatu na strone', 'Zastosowanie AI dla własnego biznesu', 'Automatyzacja pracy', 'Oszczędność czasu'],
    },
  ];

return (
    <section id="carousel-section">
      <h1 className="section-heading">{lang === 'en' ? 'Certificates' : 'Certyfikaty'}</h1>
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
