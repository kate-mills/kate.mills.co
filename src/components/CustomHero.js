import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useGlobalContext } from '../context/context';

const CustomHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <BackgroundImage
      className={className}
      fluid={img}
      onMouseOver={closeSubmenu}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(CustomHero)`
  align-items: center;
  background: linear-gradient(45deg, var(--primaryBlack), transparent) 99% 0% / cover;
  background: linear-gradient(45deg, var(--primaryColor), var(--primaryColor));
  background-position: ${props => props.position || 'center'};
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  opacity: 1 !important;
  transition: var(--mainTransition);
  width: 100%;
`
