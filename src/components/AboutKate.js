import React from 'react'
import Title from './Title'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from './Btn'
import styled from 'styled-components'

const getKate = graphql`
  query AboutKate {
    aboutKate: file(relativePath: { eq: "website-designer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const AboutKate = () => {
  const {
    aboutKate: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getKate)

  return (
    <AboutKateWrapper>
      <Title title="time to" subtitle="shine" />
      <div className="about-center">
        <article className="about-img">
          <div className="img-container">
            <Img fluid={fluid} alt="Profile photo of website designer & developer Kate Mills, owner of Ally Digital Solutions." />
          </div>
        </article>
        <article className="about-info">
          <p className="heading">The Journey</p>
          <p>My philosophy is simple: develop beautifully responsive custom websites and social media for salons and spas with exemplary customer service.</p>
          <p>My journey in creating Ally Digital Solutions began in 2020 when I wanted to fulfill what I saw as a need in the beauty industry during the COVID pandemic, to develop websites with an e-commerce component allowing estheticians a safe way to generate income.
          </p>
          <p> My inquisitive nature and passion for learning give me the confidence to never becoming stagnant in my approach to tackling new challenges. Through my innovative web solutions, I will directly build and enhance an everlasting bond between you and your customer.  I firmly believe that you will be proud of your design and enjoy the excellence in the care you receive.
            <span style={{display: 'block',marginTop: '1rem', marginBottom: '1rem' }}>
            Many thanks.
            </span>
            <span style={{display: 'block', marginTop: '0.5rem'}}>
              Kate
            </span>
          </p>
          <Btn to="/contact-us/" color colorful text="Get A Quote" />
        </article>
      </div>
    </AboutKateWrapper>
  )
}

const AboutKateWrapper = styled.section`
  &{
    padding: 4rem 0;
  }
  .about-center {
    width: 80vw;
    margin: 0 auto;
  }
  .about-img {
    margin: 3rem 0;
    background: var(--primaryBlack);
    box-shadow: var(--lightShadow);
  }
  .about-info {
    margin-top: 3rem;
  }
  .about-img {
    position: relative;
  }
  .about-img img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
    object-position: center 25% !important;
    max-height: 450px;
  }
  .img-container {
    max-height: 450px;
  }
  .about-info .heading {
    font-size: 2rem;
    letter-spacing: var(--midSpacing);
    font-family: var(--altFF);
    font-weight: 400;
    font-style: italic;
    text-transform: capitalize;
  }
  .img-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--primaryBlack);
    box-sizing: border-box;
    top: -16px;
    left: -16px;
  }
  
  @media (min-width: 768px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: flex-start;
    }
    .about-img,
    .about-info {
      margin: 0;
    }
    .about-img{
      margin-top: 3rem;
    }
    .about-img img {
      max-height: 600px;
    }
    .img-container {
      max-height: 600px;
    }
    .about-info p {
      width: 80%;
    }
  }
  @media (min-width: 1200px) {
    .about-center {
      width: 95vw;
      max-width: 1170px;
    }
  }

`
export default AboutKate
