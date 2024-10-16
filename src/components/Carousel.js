import React from 'react';
import Slider from 'react-slick';

import certificate1 from './image1c.png'
import certificate2 from './image2bi.png'

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
      description: 'description'
    },
    {
      img: certificate2,
      description: 'Certificate 2 description'
    },
    // Dodaj więcej certyfikatów tutaj
  ];

  return (
    <section id="carousel-section">
      <h1 className="section-heading">Certificates</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <div key={index} className="image-box">
              <img src={cert.img} alt={`Certificate ${index + 1}`} />
              <div>{cert.description}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
