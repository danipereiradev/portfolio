import React, { useState } from 'react';
import Image from 'next/image';

const FlipBox = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative mx-auto h-64 w-64 transform transition-transform duration-300 ${
        isFlipped ? 'rotate-y-180' : 'rotate-y-0'
      }`}
      onClick={flipCard}
    >
      <div className="absolute h-full w-full transform rounded-lg bg-white shadow-md">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full p-4 text-center">
            <Image
              src="/desk.jpeg"
              alt="Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="rotate-y-180 absolute inset-0 flex transform items-center justify-center">
          <div className="h-full w-full p-4 text-center">
            <p className="text-gray-600">Hover Text Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
