import React, { useState, useEffect, useRef } from "react";


const testimonials = [
  { name: "Aarav Sharma", text: "Best trainer ever! Helped me lose 12kg in just 3 months. Highly recommended!" },
  { name: "Ishita Patel", text: "His training plans are amazing and so motivating. I feel stronger every week!" },
  { name: "Vivaan Iyer", text: "Super professional and knows exactly what works for your body type." },
  { name: "Kiara Nair", text: "The nutrition guidance changed my life! I feel healthier than ever." },
  { name: "Arjun Rao", text: "Great workouts and personal attention. Highly recommend to anyone serious about fitness!" },
  { name: "Myra Reddy", text: "A very positive and motivating coach. I achieved my goal in record time!" },
  { name: "Kabir Menon", text: "He makes workouts fun and effective. Best decision I made this year." },
  { name: "Saanvi Deshmukh", text: "The meal plans and workout combination gave me the transformation I wanted." },
  { name: "Krish Bhat", text: "Very knowledgeable and approachable trainer. Highly recommended." },
  { name: "Aadhya Pillai", text: "From day one, I felt supported and motivated. Amazing trainer!" },
  { name: "Reyansh Verma", text: "His attention to detail during sessions is unmatched. Worth every penny!" },
  { name: "Anika Chatterjee", text: "Thanks to his guidance, I’m in the best shape of my life." },
  { name: "Advik Joshi", text: "The workouts are challenging yet fun, and the results speak for themselves." },
  { name: "Navya Mehta", text: "I feel stronger and healthier each week. Truly transformative coaching." },
  { name: "Ira Saxena", text: "Great atmosphere and very knowledgeable trainer. Highly satisfied." },
  { name: "Ayaan Kapoor", text: "Love the motivation and personal guidance. I'm finally consistent with my fitness!" },
  { name: "Ritvik Malhotra", text: "The attention to my form and technique has helped me avoid injuries." },
  { name: "Pari Sinha", text: "I lost 8kg in 2 months, and I feel more confident than ever." },
  { name: "Aarush Krishnan", text: "Very professional and result-driven approach. Loved the experience." },
  { name: "Mira Bansal", text: "The customized nutrition plan worked wonders for me." },
  { name: "Devansh Kulkarni", text: "Best trainer in town! He genuinely cares about your goals." },
  { name: "Rhea Aggarwal", text: "I achieved my dream body thanks to his dedication and guidance." },
  { name: "Veer Chawla", text: "Highly motivating, energetic, and knowledgeable trainer!" },
  { name: "Aanya Sehgal", text: "He pushes you beyond your limits in the best way possible." },
  { name: "Nivaan Prasad", text: "Great variety in workouts, which keeps me excited every session." },
  { name: "Leela Gupta", text: "My strength and stamina improved drastically within weeks." },
  { name: "Dhruv Mishra", text: "He is committed to his clients' success and it shows." },
  { name: "Siya Lakhani", text: "Love the positivity and energy in every training session." },
  { name: "Arnav Srivastava", text: "Professional, punctual, and super motivating!" },
  { name: "Vanya Kulshreshtha", text: "I feel more energetic and confident than ever before." },
  { name: "Rehaan Gill", text: "The structured workouts are perfect for my busy schedule." },
  { name: "Amaira Venkatesh", text: "Every session is exciting and challenging. Love it!" },
  { name: "Abeer Mahajan", text: "I've never felt this fit and active in my life!" },
  { name: "Charvi Dutta", text: "Highly supportive and motivating trainer. Thank you!" },
  { name: "Ishaan Kohli", text: "Focuses on your individual goals and helps you achieve them." },
  { name: "Avni Jha", text: "The results speak for themselves. I couldn't be happier!" },
  { name: "Kiaan Bajaj", text: "Great energy and focus in every session. Highly recommended." },
  { name: "Misha Tandon", text: "His training is well-balanced and effective." },
  { name: "Yuvraj Raina", text: "The transformation I experienced is unbelievable!" },
  { name: "Naina Narang", text: "I finally feel fit and strong. Thank you so much!" },
  { name: "Shaurya Malik", text: "Gives personal attention and corrects every small mistake." },
  { name: "Aarna Ghosh", text: "Super dedicated and patient. Great experience!" },
  { name: "Atharv Sood", text: "Fitness feels fun because of his energy and encouragement." },
  { name: "Tara Basu", text: "I feel motivated and positive every time I leave the gym." },
  { name: "Aaryan Oberoi", text: "He tailors the workouts exactly as per your needs." },
  { name: "Anvi Chakraborty", text: "Great combination of fun and hard work in his sessions." },
  { name: "Vihaan Bedi", text: "I lost fat and gained muscle just as I wanted. Super happy!" },
  { name: "Jiya Kaul", text: "He constantly checks on your progress and keeps you accountable." },
  { name: "Arnav Nambiar", text: "Excellent trainer and mentor. Highly recommend him." },
  { name: "Zara Bhatt", text: "I’ve seen incredible improvements in my fitness levels." },
  { name: "Kabir Shetty", text: "I feel stronger and healthier every day. Truly thankful!" }
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
        onTouchStart={stopAutoSlide}     // stop on mobile touch
        onTouchEnd={startAutoSlide}      // restart when touch endsF
      >
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-700 hover:scale-105 animate-fadeIn"
            >

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
              src="/mr india.png"
              alt="Award"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mr. India Champion</h3>
            <p className="text-gray-600">
              Honored with the prestigious Mr. India title for excellence in bodybuilding and fitness.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition">
            <img
              src="/mr delhi.png"
              alt="Mr. Delhi Champion"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mr. Delhi Champion</h3>
            <p className="text-gray-600">
              Winner of the Mr. Delhi Championship, showcasing dedication and competitive spirit.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition">
            <img
              src="/mr north india.png"
              alt="Mr. North India Champion"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mr. North India Champion</h3>
            <p className="text-gray-600">
              Recognized as Mr. North India for exceptional performance and fitness achievements.
            </p>
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
