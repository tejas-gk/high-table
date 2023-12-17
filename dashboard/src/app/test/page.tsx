// pages/index.tsx
import React from 'react';
import HorizontalCarousel from '@/components/explore-carousel';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Your Next.js Page</h1>
      <HorizontalCarousel>
        <div className="bg-blue-500 p-4">Slide 1</div>
        <div className="bg-green-500 p-4">Slide 2</div>
        <div className="bg-red-500 p-4">Slide 3</div>
        {/* Add more slides as needed */}
      </HorizontalCarousel>
    </div>
  );
};

export default HomePage;
