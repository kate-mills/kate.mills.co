256071076


module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Ally Digital Solutions', // Navigation and Site Title
  titleAlt: 'Ally Digital Solutions', // Title for JSONLD
  description: 'We develop custom websites, blogs, e-commerce, and more. Elevate your online presence with specialized web design for the beauty industry.',
  headline: 'Elevate your online presence with specialized web design for the beauty industry.', // Headline for schema.org JSONLD
  url: 'https://allydigitalsolutions.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/images/icon.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'static/favicon.png', // Used for manifest favicon generation
  shortName: 'Ally', // shortname for manifest. MUST be shorter than 12 characters
  author: 'kate-mills', // Author for schemaORGJSONLD
  themeColor: '#f5e7e9',
  backgroundColor: '#FFFF',

  twitter: '@kateinnapa', // Twitter Username
  facebook: 'allydigitalsolutions', // Facebook Site Name
  //googleAnalyticsID: 'G-Q9YRM6NEPV',
  googleAnalyticsID: 'UA-189043609-1',
  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
