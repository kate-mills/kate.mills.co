import React from 'react'
import Title from '../Title'
import WebPackageList from '../../constants/web-package-list'
import {Link} from 'gatsby'
import FadeIn from '../Animations/CustomFadeIn'

import styled from 'styled-components'

const WebPackages = () => {
  return (
    <WebPackagesWrapper className={`bg-circles section-center`}
    >
      <Title title="Basic" subtitle="Packages" />
          <p className="we-offer-p">We offer a range of website design solutions for you to choose including Websites and E-Commerce Stores for estheticians, spas, salons, and beauty professionals at a price that fits your budget and delivered promptly.  With our expertise & knowledge of the beauty industry, our design process is straightforward for you.</p>
      <FadeIn time="3s" className="center">

        {WebPackageList.map((item, index) => {
          return (
            <article key={index} className="service"
            >
              <span
              data-sal="fade-in"
              data-sal-duration="800"
              >
                <Link to={item.path}>{item.title}</Link>
              </span>
              <span className="price">{item.price}</span>
              <div className="underline"/>
              <ul data-bullet-list
              data-sal="fade-in"
              data-sal-duration="800"
              >
                  {item.pkgDetails.map((item, idx)=>{
                    return(
                      <li key={idx}><p>{item}</p></li>
                    )
                  })}
                </ul>
              {item.finePrint.map((txt, index)=>{
                return<p className="fine-print" key={index}>{txt}</p>
              })}
            </article>
          )
        })}
      </FadeIn>
    </WebPackagesWrapper>
  )
}

const WebPackagesWrapper = styled.section`
  &{
    color: var(--primaryBlack);
    padding: 4rem 0;
    border-radius: var(--radius);
    .heading,
    .we-offer-p{
      margin: 0 auto;
      background-color: var(--primaryWhite);
    }
  }
  & div{
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
        align-items: center;
        border-radius: 10px;
        color: var(--primaryBlack);
        display: flex;
        font-size: 1.2rem;
        justify-content: center;
        margin: 1rem auto;
        a{
          font-family: var(--altFF);
          font-weight: 400;
          font-style: italic;
          font-size: 1.5rem;
          text-transform: capitalize;
          letter-spacing: var(--altSpacing);
        }
      }
      .underline{
        height: 3px;
        background-color: var(--solutionsColor);
        width: 50%;
        margin: 0 auto;
      }
      div{
        font-family: var(--mainFF);
        font-size: 1.1rem;
        letter-spacing: 0.01rem;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
      }
      ul{
        text-align: center;
        margin: 1rem 3rem 1.5rem;
        font-family: var(--mainFF);
        letter-spacing: var(--altSpacing);
      }
      a:hover{
        color: var(--digitalColor);
        text-decoration: none;
      }
    }
    p.fine-print{
      font-size: .8rem;
      margin: .5rem auto;
            width: 100%;
    }
  }
  @media(min-width: 768px){
    & div{
      width: 80%;
    }
  }
`

export default WebPackages
