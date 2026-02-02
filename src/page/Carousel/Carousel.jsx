import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';
import sampahImg from '../../assets/img/sampah/sampah.jpg';
import pengelolaanImg from '../../assets/img/sampah/Pengelolaan-Limbah-Sampah.jpg';

function CarouselSampah() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Array gambar sampah
  const images = [
    {
      src: pengelolaanImg,
    },
    {
      src: sampahImg,
    }
  ];

  // Gunakan useCallback untuk menghindari re-create function
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Auto slide dengan dependency yang benar
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 detik untuk pengalaman yang lebih baik

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Handle touch events untuk swipe di mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Pause auto-play saat hover (desktop)
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div 
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={image.src} 
                // alt={image.title}
                className="carousel-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* <div className="carousel-caption">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
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
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
        )}

        {/* Progress bar (opsional) */}
        <div className="carousel-progress">
          <div 
            className="carousel-progress-bar"
            style={{ 
              width: `${((currentIndex + 1) / images.length) * 100}%`,
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselSampah;