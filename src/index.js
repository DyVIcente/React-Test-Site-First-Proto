import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Portfolio from './pages/Portfolio/portfolio'
import Error from './pages/Error/error'
import Contact from './pages/Contact/contact'
import Nav from './components/Nav/nav'
import Service from './pages/Service/service'
import Apropos from './pages/Apropos/apropos'
import Footer from './components/Footer/footer'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="service" element={<Service />} />
        <Route exact path="apropos" element={<Apropos />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
