import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const AnimatedHeading = ({primary_heading, sub_heading, btn_txt, btn_to})=>{
  return (
    <AnimatedHeadingWrapper className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">{primary_heading}</span>
          <span className="heading-primary--sub">{sub_heading}</span>
        </h1>
        <Link to={btn_to} className="btn btn--white btn--animated">{btn_txt}</Link>
      </div>
      </AnimatedHeadingWrapper>
  )
}

AnimatedHeading.defaultProps = {
  primary_heading: '',
  sub_heading: '',
  btn_txt: 'Back Home',
  btn_to:'/',
}


const AnimatedHeadingWrapper = styled.header`
  background-color: #39393c;
  background-position: top;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  height: 95vh;
  position: relative;
  .header__text-box{
    position: absolute;
    top: 40%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .heading-primary {
    color: var(--solutionsColor);
    backface-visibility: hidden;/*shaky animation hack*/
    margin-bottom: 3rem;
    text-transform: uppercase;
    white-space: pre-line;
  }
  .heading-primary--main {
    display: block;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: .7rem;
    animation: moveInLeft 1.9s ease-out .1s;
    animation-fill-mode: backwards;
    text-transform: uppercase;
    white-space: pre-line;
  }
  .heading-primary--sub {
   display: block;
   font-size: 1rem;
   font-weight: 300;
   letter-spacing: .2rem;
   animation: moveInRight 1.9s ease-out .1s;
   animation-fill-mode: backwards;
   text-transform: capitalize;
    white-space: pre-line;
    margin-top: .5rem;
  } 
  @media(min-width: 768px){
    .heading-primary--main {
      font-size: 3.5rem;
    }
    .heading-primary--sub{
      font-size: 2rem;
    }
  }
`
export default AnimatedHeading
