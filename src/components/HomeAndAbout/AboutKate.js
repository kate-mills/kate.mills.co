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
            <Img fluid={fluid} alt="Kate Mills Web Developer" />
          </div>
        </article>
        <article className="about-info">
          <p className="heading">Kate Mills, San Francisco Bay Area</p>
          <p>
            I'm Kate, a solutions-oriented Web Developer passionate about all
            things new and innovative. I embrace change and feel most fulfilled
            in challenging spaces that require learning new things.
          </p>


          <p>
            In 2014, my boyfriend dared me to learn Python - and I
            loved it! Since then, I've passed the{' '}
            <a className="underline bold" title="Kate Mills Linux Essentials Certification Verification" href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000406922/a9evpz7evs">Linux Essentials Certification</a>{' '}
            test through LPI and learned JavaScript, HTML, CSS,
            Bootstrap, JQuery, React, C, Sass, Node, and more.
          </p>
          <p> With a background in Dermatology and Aesthetics, I enjoy details and the value of UX/UI-centered ideas and designs.</p>
          <p>
            Presently I work for Michele Corley Clinical Skin Care as a Web
            Developer and Digital Content Creator.
          </p>
        </article>
      </div>
    </AboutKateWrapper>
  )
}

const AboutKateWrapper = styled.section`
  & {
    max-width: 80vw;
    margin: 0 auto;
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
