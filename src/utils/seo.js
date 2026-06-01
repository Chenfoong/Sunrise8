/**
 * SEO Utility Functions
 * Handles meta tags, open graph, and structured data
 */

export const updateMetaTags = (title, description, image = null) => {
  // Update page title
  document.title = `${title} - Sunrise Education`

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description)
  }

  // Update Open Graph tags
  updateOpenGraphTag('og:title', title)
  updateOpenGraphTag('og:description', description)
  if (image) {
    updateOpenGraphTag('og:image', image)
  }

  // Update Twitter Card tags
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  if (image) {
    updateMetaTag('twitter:image', image)
  }
}

export const updateOpenGraphTag = (property, content) => {
  let element = document.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/**
 * Structured Data (Schema.org)
 */
export const addStructuredData = (data) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export const addOrganizationSchema = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Sunrise Education',
    'description': 'A truly caring international school focused on child growth and happiness',
    'url': 'https://sunrise-education.com',
    'logo': 'https://sunrise-education.com/logo.png',
    'image': 'https://sunrise-education.com/hero-image.jpg',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'No. 25-2nd Floor, Jalan Mahogani 5/Ks7',
      'addressLocality': 'Klang',
      'addressRegion': 'Selangor',
      'postalCode': '41200',
      'addressCountry': 'MY'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'telephone': '+60-12-425-1556',
      'email': 'LOVE@sun.edu.my'
    },
    'sameAs': [
      'https://www.instagram.com/sunrisecenters/',
      'https://www.facebook.com/SunriseResourceCentre'
    ]
  }
  addStructuredData(organizationSchema)
}

export const addBreadcrumbSchema = (breadcrumbs) => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  }
  addStructuredData(breadcrumbSchema)
}

export const addCourseSchema = () => {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Cambridge IGCSE Program',
    'description': 'International General Certificate of Secondary Education - A globally recognized qualification',
    'educationLevel': 'Secondary Education',
    'url': 'https://sunrise-education.com/#cambridge',
    'provider': {
      '@type': 'Organization',
      'name': 'Sunrise Education'
    }
  }
  addStructuredData(courseSchema)
}

/**
 * Canonical URL
 */
export const setCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}

/**
 * Alternate Language Links
 */
export const addAlternateLanguageLinks = () => {
  const languages = [
    { hrefLang: 'en', url: 'https://sunrise-education.com/en/' },
    { hrefLang: 'zh', url: 'https://sunrise-education.com/zh/' },
    { hrefLang: 'ms', url: 'https://sunrise-education.com/ms/' },
    { hrefLang: 'x-default', url: 'https://sunrise-education.com/' }
  ]

  languages.forEach(lang => {
    let link = document.querySelector(`link[hreflang="${lang.hrefLang}"]`)
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', lang.hrefLang)
      document.head.appendChild(link)
    }
    link.setAttribute('href', lang.url)
  })
}

/**
 * Social Media Meta Tags
 */
export const addSocialMediaMeta = () => {
  const socialMeta = [
    { name: 'twitter:site', content: '@SunriseEducation' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' }
  ]

  socialMeta.forEach(meta => {
    if (meta.property) {
      updateOpenGraphTag(meta.property, meta.content)
    } else {
      updateMetaTag(meta.name, meta.content)
    }
  })
}
