import React from 'react'
import styled from 'styled-components'


const Banner = ({ title, info, children, className}) => {
  return (
    <div className={className}
      data-sal="zoom-in"
      data-sal-easing="ease"
      data-sal-duration="500"
    >
      <h1>
        <span className="title">{title}</span>
        <span className="paragraph">{info}</span>
      </h1>
      {children}
    </div>
  )
}

export default styled(Banner)`
  &{
    border: 0;
    color: var(--primaryBlack);
    margin: 1rem auto 2.5rem;
    padding: 0 1rem;
    text-align: center;
    width: 94vw;
    max-width: 94vw;
  }
  & * {
    color: var(--primaryBlack);
    font-family: var(--pFF);
    white-space: pre-wrap !important;
    margin: 0 auto;
    max-width: 90%;
    text-align: center;
  }
  & h1{
    margin-bottom: 1.5rem;
  }
  & h2{
    color: var(--primaryDark);
    font-size: 1.3rem;
    padding-bottom: 2rem;
    font-family: aileron, sans-serif;
    font-weight: 600;
    font-style: italic;
  }
  & .title{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-family: aileron, sans-serif;
    font-size: 2.3rem;
    letter-spacing: var(--altSpacing);
    padding: 0 1rem;
    margin: 1rem auto;
    text-transform: uppercase;
  }
  & .paragraph{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-size: 1.5rem;
  }
  & a{
    animation-fill-mode: backwards;
    background-color: var(--primaryBlack);
    border: 3px solid var(--primaryBlack);
    color: var(--primaryWhite);
    display: inline-block;
    font-size: 1.3rem;
    margin-top: 1.5rem;
    padding: .4rem 3rem;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: all var(--mainTransition);
    &:hover{
      background-color: transparent;
      color: var(--primaryBlack) !important;
    }
  }

  @media (min-width: 768px){
    &{
      padding: 2rem 0;
    }
    & .title{
      font-size: 3rem;
      letter-spacing: var(--mainSpacing);
    }
    & .paragraph{
      font-size: 1.7rem;
    }
  }
`
