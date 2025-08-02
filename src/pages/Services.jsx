import React from "react";

const Services = () => (
  <div className="bg-gray-100">
    {/* Header Section */}
    <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">My Services</h1>
    </section>

    {/* Core Services */}
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Tailored for Your Goals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
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

        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
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

        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
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
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
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
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
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
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
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

    {/* Additional Programs */}
    <section className="py-12 bg-white px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        More Programs To Explore
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Online Training</h3>
          <p className="text-gray-600">
            Can't make it to the gym? Join live online classes or follow custom
            workout plans from the comfort of your home.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Sports Performance</h3>
          <p className="text-gray-600">
            Improve strength, agility, and endurance to excel in your sport with
            specialized training sessions.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Rehabilitation</h3>
          <p className="text-gray-600">
            Safe, guided exercises to help you recover from injuries and regain
            strength and mobility.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Weight Loss Bootcamps</h3>
          <p className="text-gray-600">
            High-intensity group programs focused on burning calories and
            building lean muscle.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Me Section */}
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose My Services?</h2>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
        I combine science-based training methods, personalized attention, and
        motivational coaching to help you achieve your goals. With structured
        programs and consistent progress tracking, you'll stay focused and
        inspired.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Customized Plans</h3>
          <p className="text-gray-600">
            Every individual has different needs; I create programs that match
            your goals and lifestyle.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
          <p className="text-gray-600">
            Regular assessments and updates keep you accountable and motivated.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Flexible Schedules</h3>
          <p className="text-gray-600">
            Book sessions at times that work best for you, including weekends.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
