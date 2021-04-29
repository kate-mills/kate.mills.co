import React from "react"
import Title from "./Title"
import styled from "styled-components"
import base from "./Airtable"
import { FaVoteYea } from "react-icons/fa"
import LoadingGif from "./LoadingGif"

const Survey = ({ title }) => {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const getRecords = async () => {
    const records = await base("Survey")
      .select({})
      .firstPage()
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  const giveVote = async id => {
    setLoading(true)
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, votes: fields.votes + 1 }
        return { id, fields }
      } else {
        return item
      }
    })
    const records = await base("Survey")
      .update(tempItems)
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  React.useEffect(() => {
    getRecords()
  }, [])

  return (
    <Wrapper className="section">
      <div className="container">
        <Title title="Your" subtitle="vote"></Title>
        <h3>Your favorite social media platform?</h3>
        {loading ? (
          <LoadingGif />
        ) : (
          <ul>
            {items.map(item => {
              const {
                id,
                fields: { name, votes },
              } = item
              return (
                <li key={id}>
                  <div className="key" onClick={()=>giveVote(id)} role="button" aria-hidden="true">
                    {name.toUpperCase().substring(0, 2)}
                  </div>
                  <div onClick={()=>giveVote(id)} role="button" aria-hidden="true">
                    <h4>{name}</h4>
                    <p>{votes} votes</p>
                  </div>
                  <button aria-label={`Vote for ${name}`}>
                    <FaVoteYea aria-hidden="true" onClick={() => giveVote(id)} role="button"/>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  &{
    padding-top: 2rem;
    margin-top: 0;
  }
  .container {
    width: 90vw;
    max-width: var(--max-width);
    margin: .10rem auto;
    h3 {
      color: var(--primaryBlack);
      font-size: 2.3rem;
      font-weight: 400;
      margin-bottom: 4rem;
      text-align: center;
    }
    ul {
      margin-top: 2rem;
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      @media (min-width: 992px) {
        & {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1200px) {
        & {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
    li {
      background: var(--primaryWhite);
      border-radius: var(--radius);
      font-family: var(--pFF);
      padding: 0.75rem 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0 3rem;
      grid-gap: 0 3rem;
      align-items: center;
      .key {
        background: var(--primaryColor);
        border-radius: var(--radius);
        color: var(--primaryBlack);
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
      }
      p, h4 {
        cursor: pointer;
        font-weight: 400;
        margin-bottom: 0;
      }
      p {
        color: var(--primaryLight);
      }
      h4 {
        font-size: 1.7rem;
        position: relative;
        top: 7px;
        letter-spacing: 2px !important;
      }
      button {
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: var(--primaryGrey);
      }
    }
  }
`
export default Survey
