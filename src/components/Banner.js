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
      <div>
        {children}
      </div>
    </div>
  )
}

export default styled(Banner)`
  &{
    color: var(--primaryBlack);
    border: 0;
    color: var(--primaryBlack);
    width: 80%;
  }
  & * {
    font-family: var(--pFF);
    font-weight: 400;
  }
  &  .title{
    margin: 0 auto;
    margin-bottom: 2rem;
    display: block;
    text-align: center;
    white-space: pre-wrap;
  }
  &  .title{
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    display: block;
    font-size: 2.3rem;
    letter-spacing: var(--altSpacing);
    padding: 0 1rem;
    margin: 1rem auto;
    text-transform: uppercase;
    text-align: center;
  }
  & .paragraph{
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    display: block;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 2rem;
  }
  & a{
    align-items: center;
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    background-color: var(--primaryBlack);
    border: 3px solid var(--primaryBlack);
    color: var(--primaryWhite);
    display: flex;
    font-size: 1rem;
    justify-content: center;
    margin: 5rem auto;
    text-decoration: none;
    transition: all var(--mainTransition);
    width: fit-content;

    &:hover{
      background-color: transparent;
      color: var(--primaryBlack) !important;
    }
  }
  @media (min-width: 768px){
    &{
      padding: 2rem 0;
    }
    & a{
      font-size: 1rem;
    }
    & .title{
      font-size: 3rem;
      letter-spacing: var(--mainSpacing);
    }
    & .paragraph{
      font-size: 2rem;
    }
  }
`
