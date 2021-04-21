import React from 'react'
import styled from 'styled-components'

const Banner = ({ title, info, children, className }) => {
  return (
    <div className={className}>
      <h1 className="title">{title}</h1>
      <p className="paragraph">{info}</p>
      {children}
    </div>
  )
}

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
    font-size: 3.5rem;
    letter-spacing: var(--altSpacing);
    margin: 2rem auto;
    padding: 0 1rem;
  }
  & .paragraph{
    font-size: 1.3rem;
    font-weight: 300;
    margin: 0 auto 2rem;
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
