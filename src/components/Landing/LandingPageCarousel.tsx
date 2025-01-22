"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/Images/hero_1.jpg",
    text: "Elevate Your Business with AI-Driven Omnichannel Customer Engagement Platform",
  },
  {
    image: "/Images/hero_2.jpg",
    text: "Innovate with the Best Solutions",
  },
  {
    image: "/Images/hero_3.jpg",
    text: "Transform Your Business Today",
  },
];

const CarouselWithTextOverlay = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

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
      className="relative h-[100vh] w-full"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovered(false);
      }}
    >
      <div className="relative h-full overflow-hidden">
        <div
          className="relative flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[100vh] w-full flex-shrink-0"
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 left-0 flex h-auto w-full items-center justify-center">
                <h2 className="w-[70%] px-4 text-center text-6xl font-bold text-white md:text-6xl">
                  {slide.text}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePreviousSlide}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-10"
          } hover:opacity-75`}
        >
          &#8592;
        </button>
        <button
          onClick={handleNextSlide}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-10"
          } hover:opacity-75`}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CarouselWithTextOverlay;
