import React from 'react'
import { Link } from "gatsby"
import styled, {keyframes} from 'styled-components'
import {flash} from 'react-animations'

const flashA = keyframes`${flash}`


const SingleSolution  = ({name, slug, description}) => {
  return (
    <SingleSolutionWrapper className="solution" >
      <span className="solution-name">{name}</span>
      <span className="packages">Packages</span>
      <Link to={`/${slug}#packages`}>Learn More</Link>
      <div className="underline"></div>
      <p className="description">{description}</p>
    </SingleSolutionWrapper>
  )
}


const SingleSolutionWrapper = styled.article`
  &{
    background: var(--primaryWhite);
    border-left: 5px solid var(--primaryMd);
    border-right: 5px solid var(--primaryMd);
    border-radius: var(--radius);
    color: var(--primaryBlack);
    margin: 0 auto;
    padding: 1rem 0 0;
    text-align: center;
    :hover{
      a:hover,
      a{
        font-weight: 100;
        animation: 1s ${flashA};
        animation-iteration-count: infinite;
        white-space: pre-wrap;
      }
    }
    span.packages,
    span.solution-name{
      border-radius: 10px;
      color: var(--primaryBlack);
      display:block;
      font-family: var(--altFF);
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 600;
      line-height:1.25;
      margin: 0 auto;
      padding: .25rem 1rem;
      white-space: pre-wrap;
      width: fit-content;
    }
    span.packages{
      font-size: 1.2rem;
      font-weight: 400;
      padding-top: 0;
      margin-bottom: 1rem;
      white-space: pre-wrap;
    }
    a{
      color: var(--primaryBlack);
      display: inline-block;
      font-size: 1.2rem;
      letter-spacing: var(--altSpacing);
      margin: 0 auto;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
      :hover{
        animation: 1s ${flashA};
        color: var(--primaryBlack);
      }
    }
    .underline{
      background: var(--primaryBlack);
      height: 3px;
      margin: 0 auto;
      text-align: center;
      white-space: pre-wrap;
      width: 50%;
    }
    p.description{
      color: var(--primaryBlack);
      font-size: 1rem;
      min-height: fit-content;
      margin: 0 auto;
      padding-bottom: 1rem;
      padding-left: 1rem;
      padding-top: 1rem;
      text-align: left;
      white-space: pre-wrap;
      width: 80%;
    }
  }
  @media(max-width: 904px){
    &:nth-child(2),
    &:nth-child(1){
      margin-bottom: 1rem;
    }
  }
  @media(max-width: 668px){
    &{
      a{
        font-size: 1rem;
      }
    }
  }
`
export default SingleSolution



//data-sal="fade-in" data-sal-duration="800" 
