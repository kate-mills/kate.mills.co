import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import styles from '../../css/project.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SearchButtons from "./SearchButtons"

const Projects = ({
  projects: data,
  slug,
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
          const { slug, type } = item.data
          const fluid = item.data.images.localFiles[0].childImageSharp.fluid
          return (
            <article className={styles.project} key={item.id}>
              <div className={styles.imgContainer}>
                <Image fluid={fluid} className={styles.img} alt="single project" />
                <AniLink fade to={`/${type}/${slug}`} className={styles.link}>
                  details
                </AniLink>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primaryWhite);
  .section-center {
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 20rem;
      border-radius: var(--radius);
      opacity: 0.7;
      transition: all 0.3s linear;
    }
    article {
      background: var(--primaryWhite);
      border-radius: var(--radius);
      box-shadow: var(--lightShadow);
      transition: all 0.3s linear;
    }
    article:hover {
      box-shadow: var(--darkShadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--primaryColor);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        color: var(--primaryBlack);
        left: 50%;
        opacity: 0;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s linear;
        width: 100%;
        p {
          color: var(--primaryWhite);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        h3, a{
          color: var(--primaryWhite);
        }
        a:hover{
          color: var(--primaryBlack) !important;
        }
      }
      &:hover .info {
        opacity: 1;
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
