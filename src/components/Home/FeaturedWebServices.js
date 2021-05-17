import React from 'react'
import Title from '../Title'
import features from '../../constants/featured-web-services'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Services = () => {
  return (
    <ServicesWrapper className={`background-pattern-rain-dark section-center`}
    >
      <Title
        title="Web"
        subtitle="Design"
        subTitleColor="var(--primaryLight)"
      />

      <div className="center">
        {features.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>
                <Link to={item.path}>{item.title}</Link>
              </span>
              <div className="underline"/>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.section`
  &{
    color: var(--primaryBlack);
    padding: 4rem 0;
    border-radius: var(--radius);
  }
  & .center{
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;

    .service {
      margin: 2rem 0;
      padding: 1.5rem 0;
      text-align: center;
      background: var(--primaryWhite);
      border-radius: var(--radius);
      span{
        display: flex;
        justify-content: center; 
        color: var(--solutionsColor);
        align-items: center;
        margin: 1rem auto;
        border-radius: 10px;
        a{
          font-family: var(--scriptFF);
          font-size: 2.5rem;
          text-transform: capitalize;
          letter-spacing: var(--mainSpacing);
        }
      }
      .underline{
        height: 3px;
        background-color: var(--solutionsColor);
        width: 50%;
        margin: 0 auto;
      }
      div{
        font-family: var(--pFF);
        font-size: 1.1rem;
        font-weight: 300;
        letter-spacing: 0.01rem;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
      }
      p{
        text-align: left;
        margin: 1rem 3rem 1.5rem;
        font-family: var(--mainFF);
        letter-spacing: var(--altSpacing);
      }
      a:hover{
        color: var(--favoriteColor);
        text-decoration: none;
      }
    }
  }

`

export default Services
