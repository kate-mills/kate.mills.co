import React from 'react'
import styled from 'styled-components'

const Banner = ({ title, info, children, className}) => {
  return (
    <div className={className}>
      <h1>
        <span className="title-l1"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="500">{title}</span>
        <span className="title-l2"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="500">{info}</span>
      </h1>
      <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="500"
      >
      {children}
      </div>
    </div>
  )
}

export default styled(Banner)`
  &{
    text-align: center;
    letter-spacing: var(--mainSpacing);
    color: var(--digitalColor);
    span.title-l1 {
      display: block;
      font-size: 3.3rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
      padding: 0 1rem;
      letter-spacing: var(--altSpacing);
    }
    span.title-l2 {
      display: block;
      font-size: 1rem;
      width: 85%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    span.title-l1 {
      font-size: 4.5rem;
    }
    span.title-l2 {
      width: 70%;
    }
  }
`
