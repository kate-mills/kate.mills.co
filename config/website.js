256071076


module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Kate Mills - Web Developer', // Navigation and Site Title
  titleAlt: 'Kate Mills - Web Developer', // Title for JSONLD
  description: '',
  headline: '', // Headline for schema.org JSONLD
  url: 'https://katemillsco.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/images/icon.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'static/favicon.png', // Used for manifest favicon generation
  shortName: 'kate mills', // shortname for manifest. MUST be shorter than 12 characters
  author: 'kate-mills', // Author for schemaORGJSONLD
  themeColor: '#f5e7e9',
  backgroundColor: '#FFFF',

  twitter: '@kateinnapa', // Twitter Username
  facebook: 'katemillsco', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}

