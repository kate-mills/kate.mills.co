import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useGlobalContext } from '../context/context';

const StyledHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <BackgroundImage
      onMouseOver={closeSubmenu}
      className={className}
      fluid={img}
    >
      {children}
    </BackgroundImage>
  )
}
export default styled(StyledHero)`
  min-height: calc(100vh - 64px);
  background: linear-gradient(45deg, var(--primaryBlack), transparent) 99% 0% / cover;
  background-position: 60% top;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--mainTranistion);
`
