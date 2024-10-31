// src/Carousel.js

import React, { useEffect, useState } from 'react';

const slides = [
  'https://via.placeholder.com/300x200?text=Image+4',
  'https://via.placeholder.com/300x200?text=Image+5',
  'https://via.placeholder.com/300x200?text=Image+6',
  'https://via.placeholder.com/300x200?text=Image+7',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleIndicatorClick = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto overflow-hidden mt-[10rem]">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className="min-w-full" key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;