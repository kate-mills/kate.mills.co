import React from 'react'
import ProjectList from './ProjectList'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    projects:allAirtable(filter: {table: {eq: "Projects"}}) {
      nodes {
        id
        data {
          name
          type
          slug
          date
          images {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const { projects  } = useStaticQuery(query)

  return (
    <div>
      <ProjectList projects={projects.nodes} />
    </div>
  )
}

export default Projects
