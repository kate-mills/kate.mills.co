const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
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
      path: `/${data.slug}`,
      component: path.resolve('./src/templates/service-template.js'),
      context: {
        slug: data.slug,
      },
    })
  })
}
