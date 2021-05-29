const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

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

  const redirectList = [
    {from: '/ecommerce',   to: '/e-commerce'},
    {from: '/image-search',to: '/free-website-images'},
  ];

  redirectList.forEach(({from, to}) =>{
    createRedirect({
      fromPath: `${from}/`,
      toPath: `${to}`,
      redirectInBrowser: true,
      force: true,
      statusCode: 200,
      isPermanent: true
    });
    createRedirect({
      fromPath: `${from}`,
      toPath: `${to}`,
      redirectInBrowser: true,
      force: true,
      statusCode: 200,
      isPermanent: true
    });
  })

}
