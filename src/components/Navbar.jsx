import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = ({ navRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Desktop logic
        const currentScroll = window.scrollY;

        if (currentScroll <= 100) {
          setIsVisible(true);
        } else {
          if (currentScroll > lastScrollY) {
            setIsVisible(false); // scrolling down
          } else {
            setIsVisible(true); // scrolling up
          }
        }

        setLastScrollY(currentScroll);
      } else {
        // Mobile: navbar is always visible
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      ref={navRef}
      className={`bg-black text-white px-6 py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex md:justify-center justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="SV Fitness Gym Logo"
            className="h-16 w-auto mr-2"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/about" className="hover:text-red-400">About</Link>
          <Link to="/services" className="hover:text-red-400">Services</Link>
          <Link to="/gallery" className="hover:text-red-400">Gallery</Link>
          <Link to="/testimonials" className="hover:text-red-400">Testimonials</Link>
          <Link to="/events" className="hover:text-red-400">Events</Link>
          <Link to="/contact" className="hover:text-red-400">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-red-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-red-400">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-red-400">Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-red-400">Gallery</Link>
          <Link to="/testimonials" onClick={() => setIsOpen(false)} className="hover:text-red-400">Testimonials</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-red-400">Events</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-red-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
