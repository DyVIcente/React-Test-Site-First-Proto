import React, { useRef, useEffect } from 'react'
import './portfolio.css'
import Booki from '../../assets/booki.png'
import Ohmyfood from '../../assets/ohmyfood.png'
import Panthere from '../../assets/panthere.png'
import Kanap from '../../assets/kanap.png'
import Piquante from '../../assets/piquante.jpg'
import Kasa from '../../assets/kasa.jpg'

const PortfolioPage = () => {
  const images = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, 0)
        }
      })
    })

    images.current.forEach((image) => {
      observer.observe(image)
    })
  }, [])

  const renderProjects = () => {
    return (
      <ul className="projects-list">
        <li className="project" ref={(el) => images.current.push(el)}>
          <img src={Booki} alt="Projet 1 Booki" className="project-image" />
          <h2 className="project-title">Booki</h2>
          <p className="project-description">
            {' '}
            Booki permet aux usagers de trouver des hébergements et des
            activités dans la ville de leur choix.{' '}
          </p>
        </li>
        <li className="project" ref={(el) => images.current.push(el)}>
          <img src={Ohmyfood} alt="Ohmyfood" className="project-image" />
          <h2 className="project-title">OhMyFood</h2>
          <p className="project-description">
            Ohmyfood! est une jeune startup qui voudrait s'imposer sur le marché
            de la restauration. L'objectif est de développer un site 100% mobile
            qui répertorie les menus de restaurants gastronomiques.
          </p>
        </li>
        <li className="project" ref={(el) => images.current.push(el)}>
          <img src={Panthere} alt="Panthere" className="project-image" />
          <h2 className="project-title">Panthère</h2>
          <p className="project-description">
            {' '}
            L'agence La Panthère, une grande agence de web design basée à Lyon.
            L’activité de l’entreprise a bien démarré mais aujourd’hui, elle est
            en perte de vitesse. Eh oui, la concurrence est rude. La fondatrice
            de l’entreprise, Sophie, cherche une solution pour faire repartir
            l’activité. En tapant “Entreprise web design Lyon” sur Internet,
            elle s’aperçoit que le site de l’agence apparaît seulement en
            deuxième page des moteurs de recherche.
          </p>
        </li>
        <li className="project" ref={(el) => images.current.push(el)}>
          <img src={Kanap} alt="Kanap" className="project-image" />
          <h2 className="project-title">Kanap</h2>
          <p className="project-description">
            Kanap, une marque de canapés qui vend ses produits depuis sa
            boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une
            plateforme de e-commerce en plus de sa boutique physique pour vendre
            ses produits sur Internet.
          </p>
        </li>
        <li className="project" ref={(el) => images.current.push(el)}>
          <img src={Piquante} alt="Piiquante" className="project-image" />
          <h2 className="project-title">Piiquante</h2>
          <p className="project-description">
            Les sauces piquantes sont de plus en plus populaires, en grande
            partie grâce à la série YouTube « Hot Ones » . C’est pourquoi ce
            nouveau client, la marque de condiments à base de piment Piiquante,
            veut développer une application web de critique des sauces piquantes
            appelée « Hot Takes » .
          </p>
        </li>
        <li className="project" ref={(el) => images.current.push(el)}>
          <img src={Kasa} alt="Kasa" className="project-image" />
          <h2 className="project-title">Kasa</h2>
          <p className="project-description">
            Kasa est dans le métier de la location d’appartements entre
            particuliers depuis près de 10 ans maintenant. Avec plus de 500
            annonces postées chaque jour, Kasa fait partie des leaders de la
            location d’appartements entre particuliers en France.
          </p>
        </li>
      </ul>
    )
  }
  return (
    <div className="portf__main">
      <div className="portfolio-page">
        <h1>Mon portfolio</h1>
        {renderProjects()}
      </div>
    </div>
  )
}

export default PortfolioPage
