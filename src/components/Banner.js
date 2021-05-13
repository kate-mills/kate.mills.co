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
    border: 0;
    color: var(--primaryBlack);
    font-weight: 300;
    margin: 1rem auto;
    padding: 0 1rem 1.25rem;
    text-align: center;
    width: 94vw;
  }
  & h1{
    margin: 2rem auto;
  }
  & > h1 > span.title-l1{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-family: aileron, sans-serif;
    font-size: 3.2rem;  /* looked good at 3rem */
    font-weight: 300;
    letter-spacing: var(--altSpacing);
    line-height: 4.6rem;
    padding: 1rem auto 0;
    margin: 1rem auto;
    text-transform: uppercase;
  }
  & > h1 > span.title-l2{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-size: 1.5rem;
  }
  & > a{
    animation-fill-mode: backwards;
    background: 3px solid var(--primaryColor);
    border: 3px solid var(--primaryColor);
    color: var(--favoriteLight);
    display: inline-block;
    font-family: var(--mainFF);
    margin-top: 1.5rem;
    padding: .4rem 3rem;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: all var(--mainTransition);
    &:hover{
      background-color: transparent;
      color: var(--favoriteLight);
    }
  }
  @media (min-width: 768px){
    &{
      padding: 0 1rem;
    }
    & > h1 > span.title-l1{
      font-size: 4.3rem;
      letter-spacing: var(--mainSpacing);
      line-height: 6.3rem;
      margin-bottom: 2rem;
      max-width: 95%;
    }
    & > h1 > span.title-l2 {
      margin: 1rem auto 0;
      max-width: 50%;
    }
  }
`
