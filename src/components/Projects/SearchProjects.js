import React from "react"
import styled from "styled-components"
import SearchButtons from "./SearchButtons"
import SingleProject from './SingleProject'

const Projects = ({
  projects:data,mainImageAlt,
  showSearchBtns,
}) => {
  const [projects, setProjects] = React.useState(data)

  const setBackToAll = () => { setProjects(data) }

  const headerAndBtns = (
    <div>
      <p className="center-info">Click below to filter designs</p>
        <SearchButtons
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
    </div>
  )
  return (
    <Wrapper>
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
    letter-spacing: var(--altSpacing);
    font-size: inherit;
  }
  .section-center {
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .container {
      background: var(--clr-primary-light);
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
