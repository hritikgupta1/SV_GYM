import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80", // fitness
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80", // fitness
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80", // gym workout
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80", // dumbbells
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80", // personal trainer
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80", // personal trainer
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80", // dumbbells
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80", // cardio
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80", // abs workout
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80", // yoga training
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80", // abs workout
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80", // yoga training
  
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-${index}`}
              className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="full-screen"
            className="w-[60%] h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
