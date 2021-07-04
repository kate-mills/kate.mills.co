import React from 'react'
import FourIconList from '../../constants/four-icon-list'
import styled from 'styled-components'
import {Link} from 'gatsby'

const FourIcons  = () => {
  return (
    <FourIconsWrapper>
      <div className="center">
        {FourIconList.map((item, index) => {
          return (
            <article key={index} className="service"
              data-sal="zoom-in"
              data-sal-easing="ease"
              data-sal-duration="500">
              <span>{item.icon}</span>
              <div><Link to={item.slug}>{item.title}</Link></div>
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
    padding: 4rem 1rem;
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
        color: var(--primaryBlack);
        display: inline-block;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        line-height:0;
      }
      div {
        font-size: 1.1rem;
        letter-spacing: 0.01rem;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
      }
      p{
        margin-left: 10%;
        text-align: left;
      }
    }
  }


`
export default FourIcons
