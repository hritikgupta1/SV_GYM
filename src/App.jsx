import React, { useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  const navbarRef = useRef(null)
  const [navHeight, setNavHeight] = useState(0)

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight)
    }

    const handleResize = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.offsetHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      {/* Pass ref to Navbar */}
      <Navbar navRef={navbarRef} />

      {/* Apply padding dynamically */}
      <div style={{ paddingTop: `${navHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}

export default App
