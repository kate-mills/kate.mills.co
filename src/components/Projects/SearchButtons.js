import React from "react"
import styled from "styled-components"

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
    background: transparent;
    color: var(--clr-secondary-dark);
    font-family: var(--displayFF);
    margin: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--altSpacing);
    font-size: 1.2rem;
    padding: 0.25rem;
    cursor: pointer;
    border: none;
    outline: none;
    transition: var(--mainTransition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--bg-light-txt);
    color: var(--bg-light-txt);
  }
`
export default SearchButtons
