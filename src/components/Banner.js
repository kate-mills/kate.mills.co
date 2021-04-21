import React from 'react'
import styled, {keyframes} from 'styled-components'


const Banner = ({ title, info, children, className}) => {
  return (
    <div className={className}>
      <h1 className="title">{title}</h1>
      <p className="paragraph">{info}</p>
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
    margin: 0 auto 2.5rem;
    padding: 0 1rem;
    text-align: center;
    width 94vw;
  }
  & * {
    color: var(--primaryBlack);
    white-space: pre-wrap !important;
    max-width: 90%;
  }
  & .title{
    animation: ${slideInLeft} 2s ease-out;
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    font-size: 3.5rem;
    letter-spacing: var(--altSpacing);
    margin: 2rem auto;
    padding: 0 1rem;
  }
  & .paragraph{
    animation: ${slideInRight} 2s ease-out;
    animation-fill-mode: backwards;
    backface-visibility: hidden; /* shaky animation hack */
    font-size: 1.3rem;
    font-weight: 300;
    margin: 0 auto 2rem;
  }
  & a{
    backface-visibility: hidden; /* shaky animation hack */
    animation: ${slideInBtn} .5s ease-out 1.5s;
    animation-fill-mode: backwards;
    background-color: var(--primaryBlack);
    border: 3px solid var(--primaryBlack);
    color: var(--primaryWhite);
    display: inline-block;
    font-family: var(--mainFF);
    font-weight: 300;
    font-style: normal;
    font-size: 1rem;
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
      font-size: 5rem;
      letter-spacing: var(--mainSpacing);
    }
    & .paragraph{
      max-width: 75%;
    }
  }
`
