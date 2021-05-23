import React from "react"
import styled from "styled-components"
import SearchButtons from "./SearchButtons"
import SingleProject from './SingleProject'
import Title from '../Title'

const Projects = ({
  projects:data,mainImageAlt,
  slug,
  showSearchBtns,
}) => {
  const [projects, setProjects] = React.useState(data)
  const [title, setTitle] = React.useState('Filter')

  const setBackToAll = () => { setProjects(data) }

  const headerAndBtns = (
    <div>
      <Title title={title} subtitle="Projects"/>
      <p className="center-info">Click below to filter projects by category</p>
        <SearchButtons
          setTitle={setTitle}
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
    </div>
  )
  return (
    <Wrapper className={`background-pattern-rain-light`}>
      {showSearchBtns && ( headerAndBtns) }
      <div className="section-center">
        {projects.map(item => {
          return (
            <SingleProject key={item.id} project={item.data} showDetailLink/>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  & .center-info{
    text-align: center;
    margin-bottom: 0;
  }
  .section-center {
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .container {
      background: var(--primaryLight);
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
        object-position: top center;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
        object-position: top center;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
        object-position: top center;
        
      }
    }
  }
`
export default Projects
