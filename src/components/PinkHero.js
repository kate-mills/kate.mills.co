/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useGlobalContext } from '../context/context';



const PinkHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <BackgroundImage
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
      className={className}
      fluid={img}>
      {children}
    </BackgroundImage>
  )
}
export default styled(PinkHero)`
  align-items: baseline;
  background: linear-gradient(45deg, rgb(247 243 240 / 75%), rgb(247 243 240 / 72%)) 90% 0% / cover;
  background-position: top;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 76px);
  opacity: 1 !important;
  transition: var(--mainTranistion);

  @media(min-width:500px){
    align-items: center;
  }
`
