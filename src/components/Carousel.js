import React from 'react';
import Slider from 'react-slick';

import certificate1 from './image1c.png';
import certificate2 from './image2bi.png';

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
      description: ['Point 2 of Certificate 1', 'Point 3 of Certificate 1', 'Point 1 of Certificate 1', 'Point 2 of Certificate 1', 'Point 3 of Certificate 1',],
    },
    {
      img: certificate2,
      description: ['Point 1 of Certificate 2', 'Point 2 of Certificate 2','Point 1 of Certificate 2', 'Point 2 of Certificate 2', 'Point 3 of Certificate 2'],
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
