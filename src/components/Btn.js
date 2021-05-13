import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, className}) => {
  return <Link to={to} className={`${className}`}>{text}</Link>
}

export default styled(Btn)`
  background-color: ${props =>  props.borderColor ? props.borderColor: `var(--favoriteColor)`};
  border-radius: 10rem;
  border-style: solid;
  border-width: 3px;
  color: ${props =>  props.borderColor ? props.borderColor: `var(--primaryBlack)`};
  border-color: ${props =>  props.borderColor ? props.borderColor: `transparent`}; 
  cursor: pointer;
  display: ${props => props.display ?  props.display: `inline-block` };
  letter-spacing: var(--altSpacing);
  font-family: var(--mainFF);
  font-weight: 300;
  font-style: normal;
  font-size: 1.2rem;
  max-width: 75vw;
  padding: .4rem 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all var(--mainTransition);

  &:hover{
    background-color: var(--favoriteColor);
    cursor: pointer;
    border-color: var(--favoriteColor);
    color: var(--primaryBlack);
  }
  &:active{
    border-color: var(--primaryBlack);
  }
  @media(min-width: 768px){
    margin: 1rem;
    padding: .8rem 6rem;
  }
`
