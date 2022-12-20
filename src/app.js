import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Portfolio from './pages/Portfolio/portfolio'
import Error from './pages/Error/error'
import Contact from './pages/Contact/contact'
import Nav from './components/Nav/nav'
import Service from './pages/Service/service'
import Apropos from './pages/Apropos/apropos'
import Footer from './components/Footer/footer'
import './app.css'
import ReactSwitch from 'react-switch'
import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  // Oncrée toggletheme pour l'appeler plus facilement quand on change le theme,
  // et on dit que si le current est light alors go dark si c'est dark go light
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="portfolio" element={<Portfolio />} />
          <Route exact path="service" element={<Service />} />
          <Route exact path="apropos" element={<Apropos />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
