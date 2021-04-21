import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context';

const PinkHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <header
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
      className={className}
      fluid={img}
    >{children}
    </header>
  )
}
export default styled(PinkHero)`
  min-height: calc(100vh - 64px);
  width: 100vw;
  background-color: var(--primaryColor);
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--mainTranistion);
`

