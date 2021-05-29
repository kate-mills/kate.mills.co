import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroShort from '../components/Hero/Short'
import Banner from '../components/Hero/Banner'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'
import Title from '../components/Title'
import SearchProjects from '../components/Projects/SearchProjects'
import {typeFormatter} from '../utils/helpers'

import styled from 'styled-components'

const ServiceTemplate = ({ data:{service, projects, defaultBg} }) => {
  const {
    name,
    why,
    meta_desc,
  } = service.nodes[0].data
  const why_list = why.split('.').filter((item)=>item.length > 0)
  const singularName = typeFormatter(name);

  return (
    <Layout>
      <FullSeo title={name} description={meta_desc}/>
      <HeroShort>
        <Banner title={`Latest Beauty ${singularName}s`} info={`We build websites for spas, salons, estheticians & small businesses in the beauty industry.`}>
          <Btn to="/portfolio/" text="View all projects" />
        </Banner>
      </HeroShort>
      <ServiceTemplateWrapper>
        <div className='background-pattern-rain-dark benefit-container'>
          <Title title={`${why_list.length} benefits of a`} subtitle={singularName}/>
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
        <SearchProjects projects={projects.nodes}/>
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
    margin: 0 auto 3rem;
    padding: 1rem 1.5rem 0;
    white-space: pre-wrap;
    background-image: inherit;
    background-color: var(--primaryColor);
  }
  .benefit-list{
    margin: 0 auto 3rem;
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
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
          why
          description
          category
          starting_price
          featured
          slug
          meta_desc
        }
      }
    }
    projects: allAirtable(filter: {table: {eq: "Projects"}, data: {type: {eq: $slug}}}) {
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
