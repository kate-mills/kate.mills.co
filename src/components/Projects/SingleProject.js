import * as React from 'react' 

import styled from "styled-components"
import Image from 'gatsby-image'
import {navigate} from 'gatsby'


const SingleProject = ({project, showDetailLink=false })=>{
  return((project.url?.length > 0)
    ?<SingleProjectWrapper>
     <a href={`${project.url}`} target="_blank" rel="noreferrer">
      <div className="img-container container">
        <Image className="img" fluid={project.images.localFiles[0].childImageSharp.fluid}/>
        {showDetailLink && (<span className="link">Details</span>)}
      </div></a>
    </SingleProjectWrapper>
   :<SingleProjectWrapper onClick={()=>navigate(`/${project.type}/${project.slug}`)}>
      <div className="img-container container">
        <Image className="img" fluid={project.images.localFiles[0].childImageSharp.fluid}/>
        {showDetailLink && (<span className="link">Details</span>)}
      </div>
     </SingleProjectWrapper>
   )
}
const SingleProjectWrapper = styled.article`
  &{
    background: var(--clr-secondary-dark);
    border-radius: var(--radius);
    box-shadow: var(--lightShadow);
    transition: all 0.3s linear;
  }
  &:hover{
    box-shadow: var(--darkShadow);
  }
  .img-container {
    position: relative;
    /*background: var(--clr-secondary-color);*/
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
    background: var(--clr-secondary-color);
    border: 2px solid var(--clr-secondary-color);
    border-radius: 10rem;
    color: var(--clr-secondary-txt);
    opacity: 1;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    padding: 0.9rem 1.6rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
    object-position: top center !important;
  }
  .img-container:hover .link {
    opacity: 1;
    background: var(--clr-secondary-light);
    border-color: var(--clr-secondary-light);
    color: var(--clr-primary-txt);
  }
`
export default SingleProject
