import React from "react"
import styled from "styled-components"
import {typeFormatter} from '../../utils/helpers'

const SearchButtons = ({ projects, setProjects, setBackToAll, setTitle }) => {
  const [index, setIndex] = React.useState(0)
  const types = [
    "all",
    ...new Set(
      projects.map(project => {
        return project.data.type
      })
    ),
  ]

  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex)
    setTitle(typeFormatter(type))
    if (type === "all") {
      setBackToAll()
    } else {
      const tempProjects = projects.filter(project => {
        return project.data.type === type
      })
      setProjects(tempProjects)
    }
  }

  return (
    <Wrapper>
      {types.map((type, typeIndex) => {
        return (
          <button
            key={typeIndex}
            className={index === typeIndex ? "active" : undefined}
            onClick={() => showProjects(type, typeIndex)}
          >
            {type}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  max-width: fit-content;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  button {
    background: var(--primaryWhite);
    color: var(--primaryBlack);
    margin: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 1.3rem;
    padding: 0.25rem;
    cursor: pointer;
    border: none;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--primaryBlack);
    font-weight: 300;
    color: var(--primaryBlack);
  }
`
export default SearchButtons
