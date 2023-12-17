'use client'
import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

// import 'swiper/css/swiper.min.css';

interface HorizontalCarouselProps {
  children: React.ReactNode;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ children }) => {
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      new Swiper(swiperContainerRef.current, {
        // Your Swiper configuration options go here
        slidesPerView: 'auto',
        spaceBetween: 16,
        // Add other options as needed
      });
    }
  }, []);

  return (
    <div ref={swiperContainerRef} className="swiper-container">
      <div className="swiper-wrapper">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="swiper-slide">
            {child}
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default HorizontalCarousel;
