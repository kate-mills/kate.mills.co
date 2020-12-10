import React from 'react'
import styles from '../../css/items.module.css'
import Tour from '../Tours/Tour'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../Title'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getTours = graphql`
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
`

const FeaturedTours = () => {
  const {
    featuredTours: { tours },
  } = useStaticQuery(getTours)
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="services" />
      <div className={styles.center}>
        {tours.map(tour => {
          return <Tour key={tour.contentful_id} tour={tour} />
        })}
      </div>
      <AniLink fade to="/projects" className="btn-primary">
        Our Portfolio
      </AniLink>
    </section>
  )
}

export default FeaturedTours
