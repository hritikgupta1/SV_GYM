import React, { useState } from "react";

const images = [
  "/gallery_img1.jpeg",
  "/gallery_img2.jpeg",
  "/gallery_img3.jpeg",
  "/gallery_img4.jpeg",
  "/gallery_img5.jpeg",
  "/gallery_img6.jpeg",
  "/gallery_img7.jpeg",
  "/gallery_img8.jpeg",
  "/gallery_img9.jpeg",
  "/gallery_img10.jpeg",
  "/gallery_img11.jpeg",
  "/gallery_img12.jpeg",
  
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
            className="w-[75%] md:w-[30%] h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
