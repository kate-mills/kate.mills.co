import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroShort from '../components/Hero/Short'
import Banner from '../components/Hero/Banner'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'
import Title from '../components/Title'
import SearchProjects from '../components/Projects/SearchProjects'

import styled from 'styled-components'

const ServiceTemplate = ({ data:{service, projects, defaultBg} }) => {
  const {
    name,
    bannerTitle,
    bannerInfo,
    whyTitle,
    whyList,
    metaDesc,
  } = service.nodes[0].data
  const why_list = whyList.split('. ').filter((item)=>item.length !== 0)

  return (
    <Layout>
      <FullSeo title={name} description={metaDesc}/>
      <HeroShort className="circles-squares">
        <Banner title={`Latest Beauty ${bannerTitle}`} info={bannerInfo}>
          <Btn to="/portfolio/" text="View all projects" />
        </Banner>
      </HeroShort>
      <ServiceTemplateWrapper>
        <SearchProjects projects={projects.nodes}/>
        <div className='benefit-container polka-dots'>
          <Title title={`${why_list.length} benefits of `} subtitle={whyTitle}/>
        <div className="benefit-list">
          <ul data-bullet-list>
            {
              why_list.map((s, index) =>{
                return(<li key={index}><p>{s}.</p></li>)
              })
            }
          </ul>
        </div>
        </div>
      </ServiceTemplateWrapper>
        <div className="footer-btn"><Btn to="/portfolio/" text="view all projects" colorful color/></div>
    </Layout>
  )
}

const ServiceTemplateWrapper = styled.section`
  &{
    margin-top: 2rem;
    background-image: inherit;
    transition: var(--mainTransition);
  }
  .benefit-container{
    width: fit-content;
    max-width: fit-content;
    margin: 0;
    margin: 4rem auto 0;
    padding: 1rem 1.5rem 0;
    white-space: pre-wrap;
  }
  .benefit-list{
    margin: 0 auto;
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-left: 10px;
    background-color: var(--primaryWhite);
    transform: translateY(-10px);
    li{
      letter-spacing: .1rem;
    }
  }
`
export const query = graphql`
  query ($slug: String) {
    service:allAirtable(filter: {data: {slug: {eq: $slug}}}) {
      nodes {
        data {
          name
          bannerTitle
          bannerInfo
          whyTitle
          whyList
          description
          featured
          slug
          metaDesc
        }
      }
    }
    projects: allAirtable(filter: {table: {eq: "Projects"}, data: {type: {eq: $slug}}}, sort: {order: ASC, fields: data___number}) {
      nodes {
        id
        data {
          type
          slug
          name
          mainImgAlt
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

export default ServiceTemplate
