import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import Btn from '../components/Btn'

import styled from 'styled-components'

const ProjectTemplate = ({ data:{projects} } ) => {
  const {
    name,
    desc,
    type,
    mainImgAlt,
    url
  } = projects.nodes[0].data

  const [...projectImages] = projects.nodes.map(({data})=>data.images.localFiles[0])

  return (
    <Layout>
      <SEO title={name} noindex/>
      <HeroShort>
        <Banner title={name} info={desc || " "}> </Banner>
        </HeroShort>
      <ProjectTemplateWrapper className={`background-pattern-rain-light`}>
        <p className="centered background-pattern-rain-light" >
          <a href={url} className="url">Go to<br/>{name}</a>
        </p>
        <div className="project">
          <div className="single-project-img">
            {
              projectImages.map((img, index)=>{
                return(
                  <Image
                    key={index}
                    fluid={img.childImageSharp.fluid}
                    alt={mainImgAlt}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="footer-btn">
          <div className="hide-mobile">
            <Btn to={`/${type}/`} text={`View all ${type}`}/>
          </div>
          <Btn to={`/portfolio/`} text='View all projects'/>
        </div>
      </ProjectTemplateWrapper>
    </Layout>
  )
}


const ProjectTemplateWrapper = styled.section`
  &{
    margin-top: 2rem;
    background-image: inherit;
    transition: var(--mainTransition);
  }
  .project{
    padding: 4rem 0;
  }
  .single-project-img{
    margin: 0 auto;
    width: 55%;
    height: 55%;
    transition: var(--mainTransition);
  }
  a.url{
    background: var(--digitalColor);
    border-radius: 10rem;
    color: var(--primaryWhite);
    display: inline-block;
    letter-spacing: var(--altSpacing);
    padding: 0.5rem 1.25rem;
    text-transform: capitalize;
    white-space:normal;
    max-width: 300px;
  }
  a.url:hover{
    color: var(--primaryColor);
  }

  .hide-mobile {
    display: none;
  }

  @media (min-width: 992px) {
    .hide-mobile {
      display: inline-block;
    }
  }


  @media (min-width: 1200px) {
  }

`

export const query = graphql`
  query ($slug: String) {
    projects:allAirtable(filter: {data: {slug: {eq: $slug}}}) {
      nodes {
        data {
          name
          desc
          type
          url
          images {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  srcSet
                }
              }
            }
          }
          mainImgAlt
          img_position
          starting_price
          featured
          slug
        }
      }
    }
  } 
`

export default ProjectTemplate
