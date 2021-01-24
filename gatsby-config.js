require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    titleTemplate: "%s | Ally Digital Solutions",
    description: `Web solutions for beauty specialists by industry experts.`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katie_napa`,
    image: `/backgrounds/home-hero.png`,
    url: `https://allydigitalsolutions.com`,
    siteUrl: `https://allydigitalsolutions.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ally Digital Solutions`,
        short_name: `Ally`,
        description: `Web solutions for beauty specialists by industry experts.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fee9dd`,
        theme_color: `#fee9dd`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://allydigitalsolutions.com',
        sitemap: 'https://allydigitalsolutions.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY, 
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_ALLY_BASE_ID,
            tableName: `Services`,
            mapping: {images: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_ALLY_BASE_ID,
            tableName: `Projects`,
            mapping: {images: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_STORE_BASE_ID,
            tableName: `Customers`,
            mapping: {image: `fileNode`},
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_ALLY_BASE_ID,
            tableName: `Survey`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_ALLY_BASE_ID,
            tableName: `Clients`,
            mapping: {image: `fileNode`},
          },
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
}
