import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './Footer.css'

const CONTACT_INFO = {
  phone: '+60 12-425 1556',
  email: 'LOVE@sun.edu.my',
  instagram: 'https://www.instagram.com/sunrisecenters/',
  facebook: 'https://www.facebook.com/SunriseResourceCentre',
  aiAssistant: 'ai.sun.edu.my'
}

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>☀️ {t('nav.home')}</h3>
          <p>{t('hero.subtitle')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('contact.title')}</h4>
          <p>
            <a href={`tel:${CONTACT_INFO.phone}`}>
              📞 {CONTACT_INFO.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${CONTACT_INFO.email}`}>
              ✉️ {CONTACT_INFO.email}
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h4>{t('contact.followUs')}</h4>
          <div className="social-links">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={`https://${CONTACT_INFO.aiAssistant}`} target="_blank" rel="noopener noreferrer">
              {t('footer.aiAssistant')}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Sunrise Education. {t('footer.rights')}.</p>
      </div>
    </footer>
  )
}

export default Footer
