require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    titleTemplate: `%s | Ally Digital Solutions`,
    description: `Learn more about boosting your beauty business in 2021 with a custom website designed by an aesthetic industry expert.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katie_napa`,
    image: `/DefaultImg.jpg`,
    url: `https://allydigitalsolutions.com`,
    baseUrl: `https://allydigitalsolutions.com`,
    siteUrl: `https://allydigitalsolutions.com`,//keep for sitemap-plugin
    organization: {
      name: `Ally Digital Solutions`,
      url: `https://allydigitalsolutions.com`,
      logo: `https://allydigitalsolutions.com/images/logo.jpg`,
      telephone: `707-266-8106`,
      priceRange: `$$$`,
    }
  },
  plugins: [
    {
      resolve:`gatsby-plugin-scroll-reveal`, 
      options: {
        threshold: .1,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-189043609-2`,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `%s | Ally Digital Solutions`,
        short_name: `allydigital`,
        description: `Web solutions for beauty specialists by industry experts. Elevate your online presence with specialized web design for the beauty industry.`,
        lang: `en`,
        start_url: `/`,
        background_color:`#dcdcdc`,
        theme_color: `#e9d9d9`,
        display: `standalone`,
        icon: `src/images/ixon.png`,
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
        policy: [
          { userAgent: '*', allow: '/' },
          {userAgent: '*', disallow: '/thankyou'},
          {userAgent: '*', disallow: '/404'},
        ],
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
            tableName: `Packages`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_ALLY_BASE_ID,
            tableName: `Services`,
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
            tableName: `WebSolutions`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_ALLY_BASE_ID,
            tableName: `Clients`,
            mapping: {image: `fileNode`},
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options:{
        exclude: [
          `/thankyou/`,
          `/blogs/allyblog`,
          `/websites/superskinshop`,
          `/ecommerce/spashop`,
          `/websites/michelecorleyclinicalskincare`,
          `/websites/fabskinshop`,
          `/ecommerce/hideandwild`,
          `/websites/skincarebyhilary`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
}


// https://developers.google.com/search/docs/guides/search-gallery
