import React, { useState, useEffect } from 'react';
import './Carousel.css';
import sampahImg from '../../assets/img/sampah/sampah.jpg';
import pengelolaanImg from '../../assets/img/sampah/Pengelolaan-Limbah-Sampah.jpg';

function CarouselSampah() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array gambar sampah
  const images = [
    {
      src: pengelolaanImg,
      title: 'Pengelolaan Limbah Sampah',
      description: 'Sistem pengelolaan sampah yang efektif dan berkelanjutan'
    },
    {
      src: sampahImg,
      title: 'Daur Ulang Sampah',
      description: 'Membangun lingkungan bersih melalui daur ulang'
    },
    
  ];

  // Auto slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Slides */}
        <div 
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={image.src} 
                alt={image.title}
                className="carousel-image"
              />
              <div className="carousel-caption">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button 
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselSampah;