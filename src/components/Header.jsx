import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import './Header.css'

export const Header = () => {
  const { language, changeLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header-container flex flex-between">
        <div className="logo">
          <h1>☀️ Sunrise Education</h1>
        </div>

        <div className="header-controls flex gap-md">
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
              onClick={() => changeLanguage('zh')}
            >
              中文
            </button>
            <button
              className={`lang-btn ${language === 'ms' ? 'active' : ''}`}
              onClick={() => changeLanguage('ms')}
            >
              BM
            </button>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
