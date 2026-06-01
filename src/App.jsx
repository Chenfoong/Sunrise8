import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useLanguage } from './hooks/useLanguage'
import './App.css'

function App() {
  const { t } = useLanguage()

  return (
    <div className="app">
      <Header />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.subtitle')}</p>
            <button className="primary hero-cta">{t('hero.cta')}</button>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="programs">
          <div className="container">
            <h2>{t('programs.title')}</h2>
            <div className="grid grid-3">
              <div className="program-card">
                <h3>🎓 {t('programs.primary')}</h3>
                <p>{t('programs.primaryDesc')}</p>
                <button className="secondary">Learn More</button>
              </div>
              <div className="program-card">
                <h3>📚 {t('programs.secondary')}</h3>
                <p>{t('programs.secondaryDesc')}</p>
                <button className="secondary">Learn More</button>
              </div>
              <div className="program-card">
                <h3>🏡 {t('programs.homeschool')}</h3>
                <p>{t('programs.homeschoolDesc')}</p>
                <button className="secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Cambridge Section */}
        <section id="cambridge" className="cambridge">
          <div className="container">
            <h2>{t('cambridge.title')}</h2>
            <p className="section-subtitle">{t('cambridge.description')}</p>
            <div className="grid grid-3">
              <div className="cambridge-feature">
                <h3>🌍 {t('cambridge.recognized')}</h3>
                <p>Cambridge qualifications are recognized and respected worldwide by universities and employers.</p>
              </div>
              <div className="cambridge-feature">
                <h3>📖 {t('cambridge.subjects')}</h3>
                <p>Explore diverse subject offerings designed to develop critical thinking and practical skills.</p>
              </div>
              <div className="cambridge-feature">
                <h3>👨‍🏫 {t('cambridge.support')}</h3>
                <p>Our experienced faculty provides comprehensive support throughout the Cambridge curriculum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>{t('contact.title')}</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>📞 {t('contact.whatsapp')}</h3>
                <a href="tel:+60124251556">{t('contact.phone')}</a>
              </div>
              <div className="contact-info">
                <h3>✉️ Email</h3>
                <a href="mailto:LOVE@sun.edu.my">{t('contact.email')}</a>
              </div>
              <div className="contact-info">
                <h3>📍 {t('contact.title')}</h3>
                <p>{t('contact.address')}</p>
                <a href="https://maps.google.com/maps?ll=2.996279,101.445392&z=16&t=m&hl=en&gl=MY&mapclient=embed&cid=17369959600029876247" target="_blank" rel="noopener noreferrer">
                  {t('contact.directions')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
