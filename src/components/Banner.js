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
        <span className="subtitle">{info}</span>
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
  }
  & h1{
    margin-bottom: 1.5rem;
  }
  & > h1 > span.title{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-family: aileron, sans-serif;
    font-size: 3rem;
    letter-spacing: var(--altSpacing);
    padding: 1rem 1rem 0;
    margin: 1rem auto;
    text-transform: uppercase;
  }
  & > h1 > span.subtitle{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  & > h2{
    color: var(--primaryDark);
    font-family: var(--mainFF);
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  & > p{
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  & > a{
    animation-fill-mode: backwards;
    background-color: var(--primaryBlack);
    border: 3px solid var(--primaryBlack);
    color: var(--primaryWhite);
    display: inline-block;
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
    & > h1 > span.title{
      letter-spacing: var(--mainSpacing);
    }
    & > h2,
    & > p{
      margin: 0 auto;
      max-width: 50%;
    }
  }
`
