import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage("")

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false)
        setStatusMessage("Message sent successfully!")
        form.current.reset()
      })
      .catch((error) => {
        setLoading(false)
        setStatusMessage("Failed to send message. Please try again.")
        console.error(error.text)
      })
  }

  return (
    <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Info */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            Have questions or want to start your fitness journey? Fill out the form, and I’ll get back to you as soon as possible!
          </p>
          <div className="space-y-4">
            <a href="tel:+919911994495" className="flex items-center space-x-3 hover:text-yellow-400 transition">
              <FaPhoneAlt className="text-2xl text-yellow-300" />
              <span>+91 99119 94495</span>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.svfitness123@gmail.com" className="flex items-center space-x-3 hover:text-yellow-400 transition" target="_blank">

              <FaEnvelope className="text-2xl text-yellow-300" />
              <span>info.svfitness123@gmail.com</span>
            </a>

            <a
              href="https://maps.app.goo.gl/xQXKxswrEMyyFpR57"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 hover:text-yellow-400 transition"
            >
              <FaMapMarkerAlt className="text-2xl text-yellow-300 mt-1" />
              <span>
                Rz A 340, Near Pal Daily, Main Market, Nihal Vihar <br /> New Delhi-110041
              </span>
            </a>

            <a
              href="https://www.instagram.com/sumitverma_fitness" // replace with your actual Insta link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 hover:text-yellow-400 transition hover:underline"
            >
              <FaInstagram className="text-2xl text-yellow-300 mt-1" />
              <span>
                @s.v_fitnessgym
              </span>
            </a>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone (10 digits)"
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-500"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-md font-semibold transition hover:scale-105 disabled:opacity-70"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status message */}
            {statusMessage && (
              <p className={`text-center font-medium mt-2 ${statusMessage ? "text-green-600" : "text-red-600"}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
