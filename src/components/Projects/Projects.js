import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import SearchButtons from "./SearchButtons"

const Projects = ({
  projects: data,
  title,
  showSearchBtns,
}) => {
  const [projects, setProjects] = React.useState(data)

  const setBackToAll = () => { setProjects(data) }
  
  return (
    <Wrapper className="section">
      {showSearchBtns && (
        <SearchButtons
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
      )}
      <div className="section-center">
        {projects.map(item => {
          const { name, type } = item.data
          const fluid = item.data.images.localFiles[0].childImageSharp.fluid
          return (
            <article key={item.id}>
              <div className="container">
                <Image fluid={fluid} className="img" />
                <div className="info">
                  <p>- {type} -</p>
                  <h3>{name}</h3>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--mainWhite);
  .section-center {
    margin-top: 4rem;
    margin-right: .5rem;
    margin-left: .6rem;
    padding-bottom: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 20rem;
      border-radius: 0.25rem;
      opacity: 0.1;
      transition: all 0.3s linear;
    }
    article {
      background: var(--primaryLight);
      border-radius: 0.25rem;
      box-shadow: var(--lightShadow);
      transition: all 0.3s linear;
    }
    article:hover {
      box-shadow: var(--darkShadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: 0.25rem;
      background: var(--primaryColor);
      &:hover .img {
        opacity: 0.8;
      }
      .info {
        color: var(--black);
        left: 50%;
        opacity: 1;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s linear;
        width: 100%;
        p {
          color: var(--black);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 0;
      }
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`
export default Projects
