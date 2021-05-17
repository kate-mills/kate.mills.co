/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context';

const TallHero = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
      className={`${className}`}
      fluid={img}>
      {children}
    </div>
  )
}
export default styled(TallHero)`
  min-height: calc(100vh - 76px);
  background: var(--primaryBlack);
  opacity: 1 !important;
  transition: var(--mainTranistion);
  display: flex;
  align-items: center;
  justify-content: center;
`
