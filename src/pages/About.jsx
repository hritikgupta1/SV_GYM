import React from "react";

const About = () => (
  <div className="bg-gray-100">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
      <p className="text-lg mt-4 max-w-2xl mx-auto">
        Discover my journey, values, and why fitness is my lifelong passion.
      </p>
    </section>

    {/* Who I Am Section */}
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
        I am a certified professional trainer and MR. Delhi titleholder with years 
        of experience in fitness coaching. My mission is to help people transform 
        their bodies and lifestyle through effective workouts and nutrition plans.
        I believe in building healthy habits that last a lifetime and empowering 
        my clients to become the best version of themselves.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
          <p className="text-gray-600">
            Extensive knowledge in training and diet planning.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">100+ Clients Transformed</h3>
          <p className="text-gray-600">
            Helping people achieve their goals is my passion.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Multiple Awards</h3>
          <p className="text-gray-600">
            Recognized with several bodybuilding & fitness awards.
          </p>
        </div>
      </div>
    </section>

    {/* My Philosophy Section */}
    <section className="bg-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">My Training Philosophy</h2>
      <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
        My philosophy is simple: fitness should be enjoyable, sustainable, and 
        rewarding. I focus on helping my clients build strength and confidence, 
        not just physically but mentally as well. Whether you're a beginner or an 
        advanced athlete, I customize programs that suit your lifestyle and push 
        you towards lasting results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
        <div className="bg-gray-100 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-3">Personalized Coaching</h3>
          <p className="text-gray-600">
            Every client is unique, so I tailor workouts and meal plans to 
            individual goals, fitness levels, and preferences.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-3">Mindset Matters</h3>
          <p className="text-gray-600">
            A strong mindset is the foundation for success. I work with you to 
            develop discipline, focus, and a positive attitude.
          </p>
        </div>
      </div>
    </section>

    {/* Journey Section */}
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">My Journey</h2>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
        From humble beginnings to competing at the highest levels, my journey in 
        the fitness world has been filled with challenges and triumphs. 
        Over the years, I've learned that consistency and dedication are the keys 
        to achieving any goal. My experiences allow me to guide you effectively, 
        whether you want to build muscle, lose weight, or simply stay healthy.
      </p>
      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
        alt="Journey"
        className="rounded-lg shadow-lg mx-auto"
      />
    </section>

    {/* Call to Action */}
    <section className="bg-gradient-to-r from-red-400 to-red-600 text-white text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">
        Let’s work together to create a plan that fits your goals and lifestyle. 
        I’m here to guide and motivate you every step of the way!
      </p>
      <a
        href="/contact"
        className="bg-black hover:bg-gray-900 px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Contact Me Today
      </a>
    </section>
  </div>
);

export default About;
