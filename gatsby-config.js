require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const currentUrl = 'https://katemillsco.com'

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    titleTemplate: `%s | Ally Digital Solutions`,
    description: `Learn more about boosting your beauty business in 2021 with a custom website designed by an aesthetic industry expert.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katie_napa`,
    image: `/ally-digital-solutions.jpg`,
    url: `${currentUrl}`,
    baseUrl: `${currentUrl}`,
    siteUrl: `${currentUrl}`,//keep for sitemap-plugin
    organization: {
      name: `Ally Digital Solutions`,
      url: `${currentUrl}`,
      logo: `${currentUrl}/images/logo.jpg`,
      telephone: `707-266-8106`,
      priceRange: `$$$`,
    }
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
        disableAutoprefixing: true,
        disableMinification: true,
      },
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
        icon: `src/images/3dAD.png`,
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
        host: `${currentUrl}`,
        sitemap:`${currentUrl}/sitemap.xml`,
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
  ],
}


// https://developers.google.com/search/docs/guides/search-gallery
