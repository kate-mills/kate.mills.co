import React from 'react'
import styled from 'styled-components'


const Banner = ({ title, info, children, className}) => {
  return (
    <div className={className}>
      <h1>
        <span className="title"
        >{title}</span>
        <span className="subtitle"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="500"
        >{info}</span>
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
    margin: 1rem auto;
    padding: 0 1rem;
    text-align: center;
    width: 94vw;
  }
  & h1{
    margin: 2rem auto;
  }
  & > h1 > span.title{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-family: aileron, sans-serif;
    font-size: 3.2rem;  /* looked good at 3rem */
    letter-spacing: var(--altSpacing);
    line-height: 4.6rem;
    padding: 1rem auto 0;
    margin: 1rem auto;
    text-transform: uppercase;
  }
  & > h1 > span.subtitle{
    animation-fill-mode: backwards;
    backface-visibility: hidden;
    display: block;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 2rem;
  }
  & > div > h2,
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
      padding: 0 1rem;
    }
    & > h1 > span.title{
      font-size: 4.3rem;
      letter-spacing: var(--mainSpacing);
      line-height: 6.3rem;
      margin-bottom: 2rem;
      max-width: 75%;
    }
    & > h1 > span.subtitle,
    & > div > h2,
    & > h2,
    & > p{
      margin: 1rem auto 0;
      max-width: 50%;
    }
    & > h1 > span.subtitle{
      margin-top: 1.5rem;
    }
  }
`
