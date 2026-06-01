import React, { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './ContactForm.css'

export const ContactForm = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    studentGrade: '',
    program: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // In a real application, this would send to a backend API
      // For now, we'll simulate sending an email
      console.log('Form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        studentGrade: '',
        program: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h1>📧 {t('contact.title')}</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="contact-layout">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <h3>Phone/WhatsApp</h3>
              <a href="tel:+60124251556">{t('contact.phone')}</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:LOVE@sun.edu.my">{t('contact.email')}</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3>Location</h3>
              <p>No. 25-2nd Floor, Jalan Mahogani 5/Ks7<br/>41200 Klang, Selangor, Malaysia</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div className="info-content">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM<br/>Saturday: 9:00 AM - 1:00 PM<br/>Sunday: Closed</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/sunrisecenters/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                Instagram
              </a>
              <a href="https://www.facebook.com/SunriseResourceCentre" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                Facebook
              </a>
              <a href="https://ai.sun.edu.my" target="_blank" rel="noopener noreferrer" className="social-link ai">
                AI Assistant
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          {submitted && (
            <div className="success-message">
              <h3>✅ Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+60 12-XXX XXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="program">Interested Program *</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                <option value="">Select a program</option>
                <option value="primary">Primary Education (7-11 years)</option>
                <option value="secondary">Secondary Education (12-18 years)</option>
                <option value="homeschool">Sunrise Homeschool</option>
                <option value="cambridge">Cambridge IGCSE</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="studentGrade">Current Grade/Year Level</label>
              <input
                type="text"
                id="studentGrade"
                name="studentGrade"
                value={formData.studentGrade}
                onChange={handleChange}
                placeholder="e.g., Grade 10"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this inquiry about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Please tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="submit-btn"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Find Us on the Map</h2>
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=2.996279,101.445392&hl=en&z=16&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sunrise Education Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
