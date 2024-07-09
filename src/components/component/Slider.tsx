"use client";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const imageUrls = [
    "https://www.w3schools.com/w3images/chicago.jpg",
    "https://www.w3schools.com/w3images/ny.jpg",
    "https://www.w3schools.com/w3images/la.jpg",
  ];

  const textHeadings = ["Chicago", "New York", "Los Angeles"];

  const textDescriptions = [
    "Thank you, Chicago - A night we won't forget.",
    "The atmosphere in New York is lorem ipsum.",
    "We had the best time playing at Venice Beach!",
  ];

  const [imageCurrentIndex, setImageCurrentIndex] = useState<number>(0);

  const handleNextSlide = () => {
    setImageCurrentIndex((imageCurrentIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(interval);
  }, [imageCurrentIndex]);

  return (
    <div id="home" className="relative">
      <img className="w-full" src={imageUrls[imageCurrentIndex]}></img>
      <div className="absolute bottom-0 left-0 right-0 text-center py-8">
        <h2 className="text-white text-[22px] tracking-[0.5px]">
          {textHeadings[imageCurrentIndex]}
        </h2>
        <p className="text-white my-[15px] font-bold">
          {textDescriptions[imageCurrentIndex]}
        </p>
      </div>
    </div>
  );
};

export default Slider;
