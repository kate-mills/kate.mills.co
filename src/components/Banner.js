import React from 'react'
import styled, {keyframes} from 'styled-components'


const Banner = ({ title, info, children, className}) => {
  return (
    <div className={className}>
      <h1>
        <span className="title">{title}</span>
        <span className="paragraph">{info}</span>
      </h1>
      {children}
    </div>
  )
}

const slideInLeft = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-400px);
  }
  80%{
    transform: translateX(20px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`
const slideInRight = keyframes`
  0%{
    opacity: 0;
    transform: translateX(400px);
  }
  70%{
    transform: translateX(-20px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`
const slideInBtn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`


export default styled(Banner)`
  &{
    border: 0;
    color: var(--primaryBlack);
    margin: 1rem auto 2.5rem;
    padding: 0 1rem;
    text-align: center;
    width 94vw;
  }
  & * {
    color: var(--primaryBlack);
    font-family: var(--mainFF) !important;
    font-weight: 400;
    white-space: pre-wrap !important;
    margin: 0 auto;
    max-width: 90%;
    text-align: center;
  }
  & h1{
    margin-bottom: 1.5rem;
  }
  & .title{
    animation: ${slideInLeft} 1.5s ease-out;
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    display: block;
    font-size: 2.3rem;
    letter-spacing: var(--altSpacing);
    padding: 0 1rem;
    margin: 1rem auto;
    text-transform: uppercase;
  }
  & .paragraph{
    animation: ${slideInRight} 1.5s ease-out;
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    display: block;
    font-size: 1.5rem;
  }
  & a{
    backface-visibility: hidden; /* shaky animation hack */
    animation: ${slideInBtn} .5s ease-out 1s;
    animation-fill-mode: backwards;
    background-color: var(--primaryBlack);
    border: 3px solid var(--primaryBlack);
    color: var(--primaryWhite);
    display: inline-block;
    font-size: 1.3rem;
    max-width: 75vw;
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
      width: 60vw;
    }
    & .title{
      font-size: 3rem;
      letter-spacing: var(--mainSpacing);
    }
    & .paragraph{
      font-size: 2rem;
      max-width: 75%;
    }
  }
`
