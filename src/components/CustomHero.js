import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context';

const CustomHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div
      className={`${className}`}
      fluid={img}
      onMouseOver={closeSubmenu}
    >
      {children}
    </div>
  )
}

export default styled(CustomHero)`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 40vh;
  opacity: 1 !important;
  transition: var(--mainTransition);
  width: 100%;
`
