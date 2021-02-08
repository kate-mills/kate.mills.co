import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import styles from '../../css/project.module.css'
import SearchButtons from "./SearchButtons"
import {navigate} from 'gatsby'
import Title from '../Title'

const Projects = ({
  projects: data,
  slug,
  showSearchBtns,
}) => {
  const [projects, setProjects] = React.useState(data)
  const [title, setTitle] = React.useState('Filter')

  const setBackToAll = () => { setProjects(data) }

  const headerAndBtns = (<div className={styles.centerTitle}><Title title={title} subtitle="Projects"/>
    <p className={styles.centerInfo}>Click below to filter projects by category</p>
        <SearchButtons
          setTitle={setTitle}
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
    </div>
  )
  return (
    <Wrapper className={styles.center}>
      {showSearchBtns && ( headerAndBtns) }
      <div className="section-center">
        {projects.map(item => {
          console.log(item)
          const { slug, type } = item.data
          const fluid = item.data.images.localFiles[0].childImageSharp.fluid
          return (
            <article className={styles.project} key={item.id} onClick={()=>navigate(`/${type}/${slug}`)} onKeyPress={()=>navigate(`/${type}/${slug}`)} aria-hidden="true">
              <div className={styles.imgContainer}>
                <Image fluid={fluid} className={styles.img} alt="single project" />
                <span className={styles.link}>
                  details
                </span>
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
      &:hover .img {
        opacity: 0.2;
      }
      &:hover {
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
    /*width: 9rem;*/
    text-align: center;
    background: var(--primaryBlack);
    color: var(--primaryWhite);
  }
  a:hover{
    border-color: var(--primaryWhite);
  }
`
export default Projects
