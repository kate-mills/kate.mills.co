import React from 'react'
import FourIconList from '../../constants/four-icon-list'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Title from '../Title'

const FourIcons  = () => {
  return (
    <FourIconsWrapper>
        <Title title="Latest" subtitle="Apps"/>
      <div className="center">
        {FourIconList.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <div><Link to={`/${item.slug}/#packages`}>{item.title}</Link></div>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </FourIconsWrapper>
  )
}


const FourIconsWrapper = styled.section`
  &{
    padding: 1rem 0;
  }
  & .center{
    width: 80vw; 
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;

    .service {
      margin: 2rem 0;
      text-align: center;
      span{
        display: inline-block;
        font-size: 2rem;
        color: var(--clr-secondary-color);
        margin-bottom: 1.5rem;
        line-height:0;
      }
      div {
        a {
          font-family: var(--displayFF);
          font-weight: var(--displayFFWeight);
          border-bottom: 1px solid black;
          text-transform: capitalize;
        }
        font-size: 1.1rem;
        letter-spacing: 0.01rem;
        margin-bottom: 1.25rem;
        
      }
      p{
        margin-left: 10%;
        margin-right: 10%;
        text-align: center;
      }
    }
  }


`
export default FourIcons
