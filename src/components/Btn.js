import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, className}) => {
  return <Link to={to} className={`${className}`}>{text}</Link>
}

export default styled(Btn)`
  background-color: ${props =>  props.borderColor ? `var(--primaryBlack)`: `var(--primaryColor)`};
  border-width: 3px;
  border-color: ${props =>  props.borderColor ? props.borderColor: `var(--primaryColor)`};
  border-style: solid;
  color:var(--primaryBlack);
  color: ${props =>  props.borderColor ? `var(--primaryWhite)`: `var(--primaryBlack)`};
  cursor: pointer;
  display: ${props => props.display ?  props.display: `inline-block` };
  font-family: var(--mainFF);
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
  max-width: 75vw;
  padding: .4rem 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  transition: all var(--mainTransition);

  &:hover{
    border-color: ${props =>  (!props.borderColor)? `var(--primaryBlack)`: `var(--primaryBlack)`};
    color: ${props =>  (!props.borderColor)? `var(--primaryBlack)`: `var(--primaryBlack)`} !important;
    background-color: transparent;
    cursor: pointer;
  }
  @media(min-width: 768px){
    font-family: var(--pFF);
    font-style: normal;
    font-size: 1.2rem;
    margin: 1rem;
    padding: .8rem 6rem;
  }
`
