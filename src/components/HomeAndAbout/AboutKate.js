import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from '../Btn'
import styled from 'styled-components'

const getKate = graphql`
  query AboutKate {
    aboutKate: file(relativePath: { eq: "meet-kate.png" }) {
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
            <Img fluid={fluid} alt="Profile photo of website designer & developer Kate Mills, owner of Ally Digital Solutions." />
          </div>
        </article>
        <article className="about-info">
          <p className="heading">Web Developer</p>
          <p>I executed my first program (from the command line) around eight years ago with Zed Shaw's book, Learn Python The Hard Way, and I've been programming every day since.
          </p>
          <p>From 2016 to 2019, while employed with Michele Corley Clinical Skincare,  I was a volunteer developer for the non-profit Rebuilding Together Peninsula in Redwood City. Our team of three developers debugged and added features to their internal web app.
          </p>
          <p>By the end of 2019, my focus became building Michele Corley Clinical Skincare website. First, I took product pictures and edited them in Photoshop. After that, I gathered data and decided on Contentful for CMS. Finally, I started building the website using the framework Gatsby.</p>
          <p>In 2021, Ally Digital Solutions became the solution to continue working with Michele Corley as COVID drew her across the country.
            <span style={{display: 'block',marginTop: '1rem', marginBottom: '1rem' }}>
              Presently I continue to work with Michele as I look for a full-time remote position as a Front End Developer.
            </span>
          </p>
          <Btn to="/contact-kate/" color colorful text="Contact Me" />
        </article>
      </div>
    </AboutKateWrapper>
  )
}

const AboutKateWrapper = styled.section`
  &{
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
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--clr-secondary-color);
    box-sizing: border-box;
    top: -16px;
    left: -16px;
  }
  
  @media (min-width: 768px) {
    .about-img, .about-info { margin: 3rem auto 1rem; }
    .about-img, .about-img img, .img-container { max-width:  500px;}
  }
  @media (min-width: 1200px) {
    .about-center {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 1fr 1fr;
    }
    .about-img,.about-img img,.img-container{max-width:634px;}
    .about-img{margin: 3rem;}
  }

`
export default AboutKate
