import React from 'react';

import manOnPink from "@/assets/manOnPink.png";
import womanOnPink from "@/assets/womanOnPink.png";
import womanOnWhite from "@/assets/womanOnWhite.png"

const ImageCircles = () => {
  const images = [
    womanOnPink,
    manOnPink,
    womanOnWhite,
    // Add more image URLs here
  ];

  return (
    <div className="flex">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`w-[2.5rem] h-[2.5rem] border-2 bg-blue-500 rounded-full ${
            index !== images.length - 1 ? '-mr-5' : ''
          }`}
        >
          <img
            src={imageUrl}
            alt={`Image ${index}`}
            className="w-full h-full rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCircles;
