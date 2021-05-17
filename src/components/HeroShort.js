/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context';

const HeroShort = ({ img, className, children }) => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div
      className={`${className} background-pattern-rain-dark`}
      fluid={img}
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
    >
      {children}
    </div>
  )
}

export default styled(HeroShort)`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 55vh;
  opacity: 1 !important;
  transition: var(--mainTransition);
  width: 100%;
`
