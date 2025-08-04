import React from "react";

const Event = () => {
  const paragraphStyle = {
    marginTop: "1rem",
    lineHeight: "1.8",
    fontSize: "1rem",
    color: "#e0e0e0",
    textAlign: "justify",
    padding: "0 1rem",
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)", // red shadow
    margin: "2rem auto",
    maxWidth: "900px",
    padding: "1rem",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    display: "block",
    margin: "0 auto",
  };

  return (
    <section
      style={{
        backgroundColor: "#0d0d0d",
        color: "#ffffff",
        padding: "2rem 1rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#ffcc00",
          marginBottom: "2rem",
        }}
      >
        Upcoming Championship Events
      </h2>

      <div style={cardStyle}>
        <img
          src="/event1.jpeg"
          alt="Powerlifting Championship Poster"
          style={imageStyle}
        />
        <p style={paragraphStyle}>
          Join the <strong>Open Mr/Miss India Powerlifting Championship 2025</strong> on
          <strong> 31st August 2025</strong>, organized by the Bodybuilding & Powerlifting Association of India and SV Fitness Gym.
          This full powerlifting event includes Squats, Bench, and Deadlift with categories ranging from Girls to Master (age 39+).
          Compete in single, double, or full powerlifting with exciting prizes, including trophies, medals, wristbands, shakers, and cash rewards.
          <br /><br />
          The venue is <strong>Krishna Garden, Nihal Vihar, Delhi 110041</strong>.
          For entries, contact <strong>Summit Verma: 9911994495</strong>.
        </p>
      </div>

      <div style={cardStyle}>
        <img
          src="/event2.jpeg"
          alt="Bodybuilding Championship Poster"
          style={imageStyle}
        />
        <p style={paragraphStyle}>
          Witness the <strong>Mr/Miss India Bodybuilding & Fitness Championship 2025</strong> on
          <strong> 31st August 2025</strong>. Events include Denime Jeans, Star Bodybuilding, Bikini, Men’s Physique,
          Classic Bodybuilding, and more. Cash prizes up to ₹21,000 and special rewards like supplements and trophies await.
          <br /><br />
          Categories include JR, SR, and Master levels with fair competition and excellent recognition.
          Venue and contact are the same: <strong>Krishna Garden, Nihal Vihar, Delhi 110041</strong> |
          <strong> Summit Verma: 9911994495</strong>.
        </p>
      </div>
    </section>
  );
};

export default Event;
