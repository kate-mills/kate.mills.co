import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../components/SingleTour/Day'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    journey,
    images,
  } = data.tour

  const [mainImg, ...tourImages] = images
  return (
    <Layout>
      <StyledHero img={mainImg.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt={`Single tour image of ${name}`}
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>

          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day day={item.day} info={item.info} key={index} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default TourTemplate

export const getTour = graphql`
  query($slug: String) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
