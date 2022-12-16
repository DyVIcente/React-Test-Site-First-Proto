import './nav.css'
import { useState } from 'react'

function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    //on va editer la valeur uniquement si le showlinks est dif de false
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'} `}>
      <div className="navbar__logo">LOGO</div>
      <ul className="navbar__links">
        <li className="navbar__item slideDown-1">
          <a href="/" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideDown-2">
          <a href="/portfolio" className="navbar__link">
            Portfolio
          </a>
        </li>
        <li className="navbar__item slideDown-3">
          <a href="/service" className="navbar__link">
            Service
          </a>
        </li>
        <li className="navbar__item slideDown-4">
          <a href="/apropos" className="navbar__link">
            A propos
          </a>
        </li>
        <li className="navbar__item slideDown-5">
          <a href="/contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Nav
