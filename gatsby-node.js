const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    services:allAirtable(filter: {table: {eq: "Services"}, data: {featured: {eq: true}}}) {
      nodes {
        data {
          slug
        }
      }
    }
    }
  `)

  data.services.nodes.forEach(({ data }) => {
    createPage({
      path: `services/${data.slug}`,
      component: path.resolve('./src/templates/service-template.js'),
      context: {
        slug: data.slug,
      },
    })
  })

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}
