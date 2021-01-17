import React from "react"
import styled from "styled-components"

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
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
            style={{background: 'var(--hoverColor)', padding: '1rem 2rem', borderRadius: 'var(--radius)'}}
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
  border-radius: var(--radius);
  border-color: var(--primaryBlack);
  margin: 0 auto;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  button {
    color: var(--primaryBlack);
    margin: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 1.3rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    text-decoration: underline;
    font-weight: 300;
    color: var(--primaryDark);
  }
`
export default SearchButtons
