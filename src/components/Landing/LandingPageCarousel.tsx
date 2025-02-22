"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero_1.jpg",
    text: "Elevate Your Business with AI-Driven Omnichannel Customer Interaction Platform",
  },
  {
    image: "/images/hero_2.jpg",
    text: "Innovate with the Best Solutions",
  },
  {
    image: "/images/hero_3.jpg",
    text: "Transform Your Business Today",
  },
];

const CarouselWithTextOverlay = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Ensure we run the interval only in the browser
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        handleNextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <div
      id="home"
      className="relative h-[100vh] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[100vh] w-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="w-[70%] px-4 text-center text-6xl font-bold text-white">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-10 hover:opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-10 hover:opacity-75"
      >
        &#8594;
      </button>
    </div>
  );
};

export default CarouselWithTextOverlay;
