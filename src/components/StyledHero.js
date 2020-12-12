import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({ img, className, children }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={img}
    >
      {children}
    </BackgroundImage>
  )
}
export default styled(StyledHero)`
  min-height: calc(100vh - 65px);
  background: linear-gradient(rgb(153 102 97 / 0.7), rgba(0, 0, 0, 0.7));
  background-position: 60% bottom;
  background-size: cover;
  background-blend-mode: darken;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
