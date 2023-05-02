import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from '../Btn'
import styled from 'styled-components'

const getKate = graphql`
  query AboutKate {
    aboutKate: file(relativePath: { eq: "kate-mills.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 634, maxHeight: 547, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid_withWebp
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
      <div className="about-center">
        <article className="about-img">
          <div className="img-container">
            <Img fluid={fluid} alt="Kate Mills Front-End Developer" />
          </div>
        </article>
        <article className="about-info">
          <p className="heading">Front-End Developer</p>
          <p>
            I'm Kate, a Front-End Developer passionate about innovation and
            solving problems. I thrive in challenging environments where I can
            learn new things and grow.
          </p>
          <p>
            With over six years of experience, I specialize in creating
            responsive web applications using React.js, Gatsby, GraphQL, Styled
            Components, and CMS. I strive to adhere to best practices and enjoy
            pushing the boundaries of what's possible with web development and
            React.js.
          </p>

          <Btn to="/lets-chat/" color colorful text="Let's Chat" />
        </article>
      </div>
    </AboutKateWrapper>
  )
}

const AboutKateWrapper = styled.section`
  & {
    max-width: 80vw;
    margin: auto auto;
    padding: 1rem 0.5rem;
  }
  .about-center {
    max-width: 95%;
    margin: 0 auto;
  }
  .about-img {
    margin: 1rem 0;
    box-shadow: var(--lightShadow);
  }
  .about-info {
    margin-top: 0;
  }
  .about-img {
    position: relative;
  }
  .about-img img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
    object-position: center 25% !important;
    max-height: 547px;
  }
  .img-container {
    max-height: 547px;
  }
  .about-info .heading {
    font-size: 2rem;
    font-style: italic;
    text-transform: capitalize;
  }
  .img-container::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--clr-secondary-color);
    box-sizing: border-box;
    top: -16px;
    left: -16px;
  }
  .underline {
    text-decoration: underline;
    color: var(--clr-primary-color);
    letter-spacing: -0.01rem;
  }

  @media (min-width: 768px) {
    .about-img,
    .about-info {
      margin: 3rem auto 1rem;
    }
    .about-img,
    .about-img img,
    .img-container {
      max-width: 500px;
    }
  }
  @media (min-width: 1200px) {
    .about-center {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 1fr 1fr;
    }
    .about-img,
    .about-img img,
    .img-container {
      max-width: 634px;
    }
    .about-img {
      margin: 3rem;
    }
  }
`
export default AboutKate
