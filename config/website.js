56071076


module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Ally Digital Solutions', // Navigation and Site Title
  titleAlt: 'Ally Digital Solutions', // Title for JSONLD
  description: 'Web design for the beauty industry.  Elevate your online presence with specialized web design for the beauty industry.',
  headline: 'Elevate your online presence with specialized web design for the beauty industry.', // Headline for schema.org JSONLD
  url: 'https://allydigitalsolutions.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/images/icon.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'static/favicon.png', // Used for manifest favicon generation
  shortName: 'allydigital', // shortname for manifest. MUST be shorter than 12 characters
  author: 'kate-mills', // Author for schemaORGJSONLD
  themeColor: '#f5e7e9',
  backgroundColor: '#FFFF',

  twitter: '@kateinnapa', // Twitter Username
  facebook: 'allydigitalsolutions', // Facebook Site Name
  googleAnalyticsID: 'G-Q9YRM6NEPV',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
