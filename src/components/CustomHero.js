import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useGlobalContext } from '../context/context';

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
  const { closeSubmenu } = useGlobalContext();
  const { defaultBcg } = useStaticQuery(getDefaultBcg)

  return (
    <BackgroundImage
      className={className}
      fluid={img || defaultBcg.childImageSharp.fluid}
      onMouseOver={closeSubmenu}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(CustomHero)`
  align-items: center;
  background: linear-gradient(45deg, black, transparent) 60% 100% / cover;
  background-position: ${props => props.position || 'center'};
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 40vh;
  opacity: 1 !important;
  transition: var(--mainTransition);
  @media(max-width: 570px){
    min-height: 50vh;
  }
`
