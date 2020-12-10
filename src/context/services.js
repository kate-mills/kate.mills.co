import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {filterForFeaturedServices, getServiceCategories} from '../utils/helpers' 


const data = graphql`
  {
    allAirtable(filter: {table: {eq: "Services"}}) {
      allServices:nodes {
        id
        data {
          name
          category
          images {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          featured
          starting_price
        }
      }
    }
  }
`



const ServicesContext = React.createContext();

const ServicesProvider = ({children})=>{

  const {allAirtable:{allServices}} = useStaticQuery(data);
  const featuredServices = filterForFeaturedServices(allServices);
  const serviceCategories = getServiceCategories(allServices); 

  return <ServicesContext.Provider value={{featuredServices, allServices, serviceCategories}}>
    {children}
  </ServicesContext.Provider>
}

export {ServicesContext, ServicesProvider}
