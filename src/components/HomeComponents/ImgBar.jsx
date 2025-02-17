import React, { useState } from "react";
import { FaPlus, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import img from '../../assets/clg (2).jpg'

const images = [
  "https://i.ibb.co.com/BH9VJdrL/clg-1.jpg",
  "https://i.ibb.co.com/1tpq2Hk3/img-1.jpg",
  "https://i.ibb.co.com/XkSbGvpF/clg-2.jpg",
  "https://i.ibb.co.com/qMfSrMnn/classroom.jpg",
];

const ImgBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt="University"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlus className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelectedIndex(null)}
          >
            <FaTimes />
          </button>

          <button
            className="absolute left-5 text-white text-3xl bg-black/50 p-3 rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>

          <img
            src={images[selectedIndex]}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />

          <button
            className="absolute right-5 text-white text-3xl bg-black/50 p-3 rounded-full"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImgBar;
