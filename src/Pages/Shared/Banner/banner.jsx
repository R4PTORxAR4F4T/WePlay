import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './banner.css'; // Import custom CSS file

import img1 from '/b1.jpg';
import img2 from '/b2.jpg';
import img3 from '/b3.jpg';
import img4 from '/b4.jpg';

const banner = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const targetDate = new Date('2023-06-30'); // Replace with your target date
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}day ${hours}hr ${minutes}min ${seconds}sec`);
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='z-1'>
      <Carousel>
        <div className="carousel-slide">
          <img src={img4} alt="Slide 1" />
          <div className="carousel-text">
            <p className="carousel-title">The Best</p>
            <p className="carousel-subtitle">SUMMER CAMP</p>
            <p className="carousel-start">start in</p>
            {countdown && <p className="countdown text">{countdown}</p>}
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="Slide 2" />
          <div className="carousel-text">
            <p className="carousel-subtitle">Make Your Summer</p>
            <p className="carousel-start">enjoyable</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img3} alt="Slide 3" />
          <div className="carousel-text">
            <p className="carousel-subtitle">Make Your Summer</p>
            <p className="carousel-start">unforgotable</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img1} alt="Slide 4" />
          <div className="carousel-text">
            <p className="carousel-subtitle">Make Your Summer</p>
            <p className="carousel-start">creative</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default banner;
