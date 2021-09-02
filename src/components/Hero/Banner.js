import React from 'react'
import styled from 'styled-components'

const Banner = ({ title, info, children, className}) => {
  return (
    <div className={className}>
      <h1>
        <span className="title-l1">{title}</span>
        <span className="title-l2"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="100">{info}</span>
      </h1>
      <div
          className="child-div"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="100"
      >
      {children}
      </div>
    </div>
  )
}

export default styled(Banner)`
  &{
    color: ${props => props.color || 'var(--clr-primary-dark)'};
    width: 100%;
    text-align: center;
    letter-spacing: var(--mainSpacing);
    position: relative;
    padding-top: 2rem;
    /*padding-bottom: 1.5rem;*/
    span.title-l1 {
      position: relative;
      display: block;
      font-size: 3.3rem;
      text-transform: capitalize;
      margin-bottom: 1rem;
      padding: 0 1rem;
      letter-spacing: var(--altSpacing);
    }
    span.title-l2 {
      display: block;
      font-family: var(--altFF);
      font-style: italic;
      font-size: 1.5rem;
      letter-spacing: var(--midSpacing);
      width: 95%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
    .child-div{ padding: 1rem; }
  }
  @media screen and (min-width: 768px) {
    &{
      padding-top: 5rem;
      span.title-l1 {
        font-size: 4.5rem;
      }
      span.title-l2 {
        width: 80%;
      }
    }
  }
`
