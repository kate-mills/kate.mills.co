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
    image: `/background/Napa.jpeg`,
    url: `https://allydigital.netlify.app`,
    siteUrl: `https://allydigital.netlify.app`,
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
        background_color: `#60a3bc`,
        theme_color: `#60a3bc`,
        display: `standalone`,
        icon: `src/images/icongreen.png`,
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
        host: 'https://allydigital.netlify.app',
        sitemap: 'https://allydigital.netlify.app/sitemap.xml',
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
