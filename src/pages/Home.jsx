import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <div className="bg-gray-100">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-black to-gray-900 text-white text-center py-16 px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to SV FITNESS GYM
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        Mr. India | Champion | Professional Coach
      </p>
      <Link
        to="/contact"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg transition duration-500"
      >
        Get Started
      </Link>

    </section>

    {/* About Section */}
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-justify">
        As MR. India, MR. Delhi, a certified professional coach and qualified dietician, I have had the privilege of transforming the lives of over 1500 clients worldwide. My holistic approach combines personalized training, science-backed nutrition plans, and constant motivation to help you achieve lasting results. Whether your goal is to build muscle, lose weight, or unlock your peak performance, I am committed to guiding you every step of the way with passion and precision.
      </p>
    </section>

    {/* Cards Section */}
    <section className="py-12 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-105 transform transition">
          <img
            src="/personal training.png"
            alt="Personal Training"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
          <p className="text-gray-600">
            One-on-one sessions tailored to your goals with full attention and support.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-105 transform transition">
          <img
            src="/strength conditioning.jpg"
            alt="Strength & Conditioning"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Strength & Conditioning</h3>
          <p className="text-gray-600">
            Build strength, stamina, and athletic performance with proven methods.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-105 transform transition">
          <img
            src="/nutrition coaching.jpg"
            alt="Nutrition Coaching"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Nutrition Coaching</h3>
          <p className="text-gray-600">
            Learn how to fuel your body with meal plans that suit your lifestyle.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-105 transform transition">
          <img
            src="/body building.jpg"
            alt="Bodybuilding"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Bodybuilding</h3>
          <p className="text-gray-600">
            Expert plans to help you build muscle and achieve a competition-ready physique.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-105 transform transition">
          <img
            src="/power lifting.jpg"
            alt="Powerlifting Preparation"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Powerlifting Preparation</h3>
          <p className="text-gray-600">
            Specialized programs to increase your max lifts and excel in competitions.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-105 transform transition">
          <img
            src="/group classes.jpg"
            alt="Group Classes"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Group Classes</h3>
          <p className="text-gray-600">
            Fun, engaging group workouts that build community and keep you motivated.
          </p>
        </div>
      </div>
    </section>

    {/* Call-to-Action */}
    <section className="py-12 px-6 text-center bg-gradient-to-r from-red-300 to-red-500 text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p className="mb-6 text-lg">
        Join me today and take the first step towards a fitter and healthier you!
      </p>
      <Link
        to="/contact"
        className="bg-red-600 text-black px-6 py-3 rounded-lg text-lg font-semibold transition duration-500 hover:bg-red-700 "
      >
        Book a Session
      </Link>
    </section>
  </div>
);

export default Home;
