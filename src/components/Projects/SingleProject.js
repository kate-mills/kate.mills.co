import * as React from 'react' 

import styled from "styled-components"
import Image from 'gatsby-image'
import {navigate} from 'gatsby'


const SingleProject = ({project, showDetailLink=false })=>{
  return(
    <SingleProjectWrapper onClick={()=>navigate(`/${project.type}/${project.slug}`)} >
      <div className="img-container container">
        <Image className="img" fluid={project.images.localFiles[0].childImageSharp.fluid}/>
        {showDetailLink && (<span className="link">Details</span>)}
      </div>
    </SingleProjectWrapper>
  )
}
const SingleProjectWrapper = styled.article`
  &{
    background: var(--primaryWhite);
    border-radius: var(--radius);
    box-shadow: var(--lightShadow);
    transition: all 0.3s linear;
  }
  &:hover{
    box-shadow: var(--darkShadow);
  }
  .img-container {
    position: relative;
    background: var(--primaryWhite);
    transition: var(--mainTransition);
    opacity: 0.55;
  }
  .img-container:hover{
    height: 100%;
    opacity: .9;
  }
  .img {
    transition: var(--mainTransition);
    height: 15rem;
    border-radius: var(--radius);
    opacity: 0.7;
    transition: all 0.3s linear;
    object-position: top center !important;
  }

  .img-container:hover .img {
    opacity: 1;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primaryBlack);
    border: 2px solid var(--primaryBlack);
    border-radius: 10rem;
    color: var(--primaryWhite);
    font-family: var(--tallFF);
    font-weight: 400;
    font-style: normal;
    opacity: 1;
    text-transform: uppercase;
    letter-spacing: var(--altSpacing);
    padding: 0.9rem 1.6rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
    object-position: top center !important;
  }
  .img-container:hover .link {
    opacity: 1;
    background: var(--primaryWhite);
    border-color: var(--primaryWhite);
    color: var(--primaryBlack);
  }
`
export default SingleProject
