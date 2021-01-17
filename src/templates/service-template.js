import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import Btn from '../components/Btn'
import styles from '../css/servicetemplate.module.css'
import SEO from '../components/SEO'
import Title from '../components/Title'
import SearchProjects from '../components/Projects/SearchProjects'

export  const nameFormatter = (str) => {
    const  pattern = /s$/; // match s at the end of the word
    const  endsInS = str.match(pattern); 
    let formatName = str;
    if (endsInS){
      formatName = str.slice(0, -1);
    }
    else{
      formatName = 'Shopping Cart'
    }
    return formatName;
  }

const ServiceTemplate = ({ data:{service, projects, defaultBg} }) => {
  const {
    name,
    why,
    img_position,
  } = service.nodes[0].data
  const why_list = why.split('.').filter((item)=>item.length > 0)
  const singularName = nameFormatter(name);

  return (
    <Layout>
      <SEO title={name}/>
      <CustomHero position={`${img_position}`} img={defaultBg.childImageSharp.fluid}>
        <Banner title={name}>
          <Btn to="/portfolio/" text="View all projects"/>
        </Banner>
      </CustomHero>
      <section className={styles.template}>
        <div className="coloredBg section-center">
          <Title title="The Benefits of having a" subtitle={singularName}/>
        <div className={styles.whyList}>
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
        <div className="footer-btn"><Btn to="/portfolio/" text="view all projects" colorful color/></div>
      </section>
    </Layout>
  )
}

export default ServiceTemplate

export const getService = graphql`
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
    defaultBg: file(relativePath: { eq: "background/HomeAlly.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  } 
`
