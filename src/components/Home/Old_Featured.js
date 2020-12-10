import React from 'react'
import styles from '../../css/items.module.css'
import Service  from '../Services/Service'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../Title'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



/*const getServices = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      tours: nodes {
        name
        price
        slug
        country
        contentful_id
        days
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`*/
export const query = graphql`
  {
    featuredServices:allAirtable(filter: {table: {eq: "Services"}, data: {featured: {eq: true}}}) {
      services:nodes {
        id
        data {
          name
          category
          starting_price
          slug
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


const FeaturedServices = () => {
  const { featuredServices:{ services  }, } = useStaticQuery(query)

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="services" />
      <div className={styles.center}>
        {services.map(({data:service, id}) => {
          return <Service key={id} service={service} />
        })}
      </div>
      <AniLink fade to="/projects" className="btn btn-primary">
        Our Portfolio
      </AniLink>
    </section>
  )
}

export default FeaturedServices
