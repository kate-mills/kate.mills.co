/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import styled from 'styled-components'
//import BackgroundImage from 'gatsby-background-image'
import { useGlobalContext } from '../context/context';



const PinkHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
      className={`${className} background-pattern-rain-dark`}
      fluid={img}>
      {children}
    </div>
  )
}
export default styled(PinkHero)`
  background-color: #efebe8;
  align-items: baseline;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 76px);
  opacity: 1 !important;
  transition: var(--mainTranistion);
  width: 100%;

  @media(min-width:500px){
    align-items: center;
  }
`
