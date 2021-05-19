import React from 'react'
import styled from 'styled-components'

const HeroShort = ({ img, className, children }) => {

  return (
    <div
      className={`${className} background-pattern-rain-dark`}
      fluid={img}>
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
