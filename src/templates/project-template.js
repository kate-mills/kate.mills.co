import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import HeroShort from '../components/Hero/Short'
import Banner from '../components/Hero/Banner'
import FullSeo from '../components/FullSeo'
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
      <FullSeo title={name} noindex/>
      <HeroShort className="bg-circles">
        <Banner title={name} info={desc || " "}> </Banner>
        </HeroShort>
      <ProjectTemplateWrapper className={``}>
        <p className="centered" >
          <a href={url} className="url">Go to<br/>{name}</a>
        </p>
        <div className="project">
          <div className="single-project-img bg-circles">
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
    transition: var(--mainTransition);
  }
  .project{
    padding: 4rem 0;
  }
  .single-project-img{
    padding: 2rem;
    border-radius: var(--radius);
    margin: 0 auto;
    width: 95%;
    height: 85%;
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
    .single-project-img{
      width: 55%;
      height: 55%;
    }
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
          mainImgAlt
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
        }
      }
    }
  } 
`

export default ProjectTemplate
