import React from 'react'
import styled, { keyframes } from 'styled-components';
import {Link} from 'gatsby'
import { zoomIn } from 'react-animations';
const zoomInAnimation = keyframes`${zoomIn}`;


const Btn = ({to, text, color, bgColor, className}) => {
  return (
    <Link to={to}
      className={`${className}
      btn--animation btn--${bgColor || 'dark'}
      `}
      data-sal="zoom-in"
      data-sal-delay="2000"
    >{text}</Link>
  )
}

export default styled(Btn)`
  &:link,
  &:visited{
    font-family: var(--mainFF);
    font-size: 1.09rem;
    letter-spacing: var(--altSpacing);
    text-transform: capitalize;
    text-decoration: none;
    padding: 1.5rem 3.5rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .3s;
    position: relative;
  }
  &:hover{
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
  }
  &:active {
    transform: translateY(.1rem);
    box-shadow: 0 .5rem .1rem rgba(0, 0, 0, .2);
  }
  &::after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
  &:hover::after{
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
  &.btn--animation{
    animation: ${zoomInAnimation};
    animation-duration: 800ms;
  }
  &.btn--light {
    background-color: var(--clr-primary-medium);
    color: var(--clr-black2);
  }
  &.btn--dark {
    background-color: var(--clr-black2);
    color: var(--clr-primary-light);
  }
  &.btn--dark:hover{
    color: var(--clr-primary-darkest);
  }
  &.btn--dark::after{
    background-color: var(--clr-black);
  }
  &.btn--light::after{
    background-color: var(--clr-primary-light);
  }

  @media(min-width: 768px){ margin: 1rem; }
`
