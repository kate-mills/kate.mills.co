import React from 'react'
import Title from '../Title'
import SingleSolution from './SingleSolution'
import styled from 'styled-components'


import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
  solutions:allAirtable(filter: {table: {eq: "WebSolutions"}}, sort: {order: DESC, fields: data___name}) {
      nodes {
        id
        data {
          name
          slug
          description
        }
      }
    }
  }
`


const OurSolutions = () => {
  const {solutions:{nodes:solutions}} = useStaticQuery(query)
  return (
    <OurSolutionsWrapper className={`section-center`}>
      <Title title="Digital" subtitle="Options" className="design design-title"/>
      <div className="center">
        {solutions.map(({id, data}) => {
          return <SingleSolution key={id} {...data}/>
        })}
      </div>
    </OurSolutionsWrapper>
  )
}

const OurSolutionsWrapper = styled.section`
  &{
    border-radius: var(--radius);
    margin-top: 1rem;
    .design{
      margin: 0 auto;
      text-align: center;
      p.heading{
        padding:1rem 0;
        margin: 0 auto;
      }
    }
    div.center{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      margin: 0 auto;
      padding:2rem;
    }
  }
  @media(min-width: 768px){
    & div.center{
      width: 100%;
    }
  }
`

export default OurSolutions
