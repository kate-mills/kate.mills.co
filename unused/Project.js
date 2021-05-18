import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const getDefaultImg = graphql` {
    file(relativePath: { eq: "ally-digital-solutions-website-designers.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Project = ({ project }) => {
  const data = useStaticQuery(getDefaultImg)
  const defaultImg = data.file.childImageSharp.fluid
  const { type, slug, images } = project

  console.log(images)
  let mainImage = images ? images.localFiles[0].childImageSharp.fluid : defaultImg

  return (
    <ProjectWrapper>
      <div className="img-container">
        <Image fluid={mainImage} className="img" alt="single project" />
        <Link to={`/${type}/${slug}`} className="link">
          details
        </Link>
      </div>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.article`
  &{
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  &:hover {
    box-shadow: var(--darkShadow);
  }
  & .img-container {
    position: relative;
    background: var(--primaryWhite);
    transition: var(--mainTransition);
    opacity: 0.55;
  }
  & .img-container:hover{
    height: 100%;
    opacity: .9;
  }
  .img {
    transition: var(--mainTransition);
  }
  & .img-container:hover .img {
    opacity: 1;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primaryBlack);
    border: 2px solid var(--primaryBlack);
    color: var(--primaryWhite);
    opacity: 1;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    padding: 0.9rem 1.6rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
  }
  & .img-container:hover .link {
    opacity: 1;
    background: var(--primaryWhite);
    color: var(--primaryBlack);
  }
  
  .centerTitle{
    padding-top: 1rem;
    margin-bottom: 0;
  }
  .centerInfo{
    text-align: center;
    margin-bottom: 0;
    font-style: italic;
  }

`

export default Project
