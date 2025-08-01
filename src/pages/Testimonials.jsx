import React, { useState, useEffect, useRef } from "react";


const testimonials = [
  {
    name: "Rahul Verma",
    text: "Best trainer ever! Helped me lose 12kg in just 3 months. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Neha Sharma",
    text: "His training plans are amazing and so motivating. I feel stronger every week!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Amit Kapoor",
    text: "Super professional and knows exactly what works for your body type.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Pooja Singh",
    text: "The nutrition guidance changed my life! I feel healthier than ever.",
    image: "https://randomuser.me/api/portraits/women/52.jpg"
  },
  {
    name: "Karan Mehta",
    text: "Great workouts and personal attention. Highly recommend to anyone serious about fitness!",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    name: "Shreya Bhatia",
    text: "A very positive and motivating coach. I achieved my goal in record time!",
    image: "https://randomuser.me/api/portraits/women/30.jpg"
  },
  {
    name: "Arjun Malhotra",
    text: "He makes workouts fun and effective. Best decision I made this year.",
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    name: "Isha Gupta",
    text: "The meal plans and workout combination gave me the transformation I wanted.",
    image: "https://randomuser.me/api/portraits/women/61.jpg"
  },
  {
    name: "Ravi Soni",
    text: "Very knowledgeable and approachable trainer. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    name: "Meena Chawla",
    text: "From day one, I felt supported and motivated. Amazing trainer!",
    image: "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    name: "Dev Khurana",
    text: "His attention to detail during sessions is unmatched. Worth every penny!",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    name: "Priya Jadhav",
    text: "Thanks to his guidance, I’m in the best shape of my life.",
    image: "https://randomuser.me/api/portraits/women/38.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const totalSlides = Math.ceil(testimonials.length / 3);

  // Get 3 testimonials for current slide
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? testimonials.length - 3 : prev - 3
    );
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Testimonials</h1>
        <p className="mt-2 text-lg text-gray-200">
          Hear what my clients have to say about their transformation!
        </p>
      </section>

      {/* Testimonials */}
      <section
        className="py-12 px-6 max-w-6xl mx-auto relative"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-700 hover:scale-105 animate-fadeIn"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-red-700"
              />
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <h3 className="text-lg font-semibold text-red-700">{t.name}</h3>
            </div>
          ))}
        </div>

        {/* Next/Prev Buttons */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          <img
            src="/next_button_img.jpg"
            alt="Previous"
            className="w-6 h-6 rotate-180"
          />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          <img
            src="/next_button_img.jpg"
            alt="Next"
            className="w-6 h-6"
          />
        </button>



        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx * 3)}
              className={`w-3 h-3 rounded-full cursor-pointer ${idx * 3 === currentIndex ? "bg-red-700" : "bg-gray-400"
                }`}
            ></span>
          ))}
        </div>
      </section>
      {/* Achievements Section */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center mt-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Achievements & Certifications</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Over the years, I’ve been honored with multiple awards and certifications
          that reflect my dedication to fitness and training excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition">
            <img
              src="https://source.unsplash.com/80x80/?medal"
              alt="Award"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mr. Delhi Champion</h3>
            <p className="text-gray-600">Recognized for outstanding performance in bodybuilding competitions.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition">
            <img
              src="https://source.unsplash.com/80x80/?certificate"
              alt="Certification"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Certified Personal Trainer</h3>
            <p className="text-gray-600">Certified by top international fitness organizations.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition">
            <img
              src="https://source.unsplash.com/80x80/?trophy"
              alt="Trophy"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">100+ Clients Transformed</h3>
            <p className="text-gray-600">A track record of successful transformations and client success stories.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center py-16 mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="mb-6 text-lg">
          Join my program today and start your journey towards a healthier, stronger you.
        </p>
        <a
          href="/contact"
          className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Book Your Free Consultation
        </a>
      </section>

    </div>
  );
};

export default Testimonials;
