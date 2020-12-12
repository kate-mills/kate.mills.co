import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { useStaticQuery, graphql } from 'gatsby'

export const getDefaultBcg = graphql`
  {
    defaultBcg: file(relativePath: { eq: "background/Napa.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const CustomHero = ({ img, className, children }) => {
  const { defaultBcg } = useStaticQuery(getDefaultBcg)

  return (
    <BackgroundImage
      className={className}
      fluid={img || defaultBcg.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(CustomHero)`
  min-height: 50vh;
  background:  linear-gradient(rgb(96 163 188 / 0.7), rgba(0, 0, 0, 0.7));
  background-position: ${props => props.position || 'center'};
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
`
