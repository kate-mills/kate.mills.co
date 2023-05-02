require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const currentUrl = 'https://katemillsco.com'

module.exports = {
  siteMetadata: {
    title: `Kate Mills - Front-End Developer`,
    titleTemplate: `%s | Kate Mills - Front-End Developer`,
    description: `Kate Mills - Front-End Developer`,
    dateModified: `${new Date().toISOString()}`,
    author: `Kate Mills`,
    twitterUsername: `@katie_napa`,
    image: `/seoimg.jpg`,
    url: `${currentUrl}`,
    baseUrl: `${currentUrl}`,
    siteUrl: `${currentUrl}`,//keep for sitemap-plugin
    organization: {
      name: `Kate Mills`,
      url: `${currentUrl}`,
      logo: `${currentUrl}/images/kate-mills.jpg`,
      telephone: `415-988-1102`,
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
        name: `%s | Kate Mills - Web Developer`,
        short_name: `kate mills`,
        description: `Kate Mills - Web Developer Latest Apps`,
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
