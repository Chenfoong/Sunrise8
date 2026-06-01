import React, { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './Navigation.css'

export const Navigation = () => {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.programs'), href: '#programs' },
    { label: t('nav.cambridge'), href: '#cambridge' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container flex flex-between">
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
