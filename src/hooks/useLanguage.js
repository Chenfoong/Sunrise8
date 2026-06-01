import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import en from '../i18n/en.json'
import zh from '../i18n/zh.json'
import ms from '../i18n/ms.json'

const translations = {
  en,
  zh,
  ms
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  const { language, changeLanguage } = context
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value || key
  }

  return { language, changeLanguage, t }
}
