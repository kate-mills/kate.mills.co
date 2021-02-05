import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useGlobalContext } from '../context/context';

const PinkHero = ({ img, className, children }) => {
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
export default styled(PinkHero)`
  min-height: calc(100vh - 64px);
  background: linear-gradient(45deg, var(--primaryColor), var(--primaryColor)) 99% 0% / cover;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--mainTranistion);
`
