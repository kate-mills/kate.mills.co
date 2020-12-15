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
      projects:allAirtable(filter: {table: {eq: "Projects"}}){
        nodes {
          data {
            slug
            type 
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
        slug: data.slug
      },
    })
  })
  data.projects.nodes.forEach(({ data }) => {
    createPage({
      path: `/${data.type}/${data.slug}`,
      component: path.resolve('./src/templates/project-template.js'),
      context: {
        slug: data.slug,
      },
    })
  })
}
