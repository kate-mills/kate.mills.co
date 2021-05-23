import React from 'react'
import styled from 'styled-components'

const TallHero = ({ img, className, children }) => {
  return (
    <div
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
  transition: var(--mainTransition);
  display: flex;
  align-items: center;
  justify-content: center;
`
