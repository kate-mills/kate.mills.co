import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, className}) => {
  return <Link to={to} className={`${className}`}>{text}</Link>
}

export default styled(Btn)`
  border-radius: 10rem;
  border-style: solid;
  border-width: 3px;
  background-color: ${props =>props.borderColor ? props.borderColor: `var(--primaryBlack)`};
  border-color:     ${props =>props.borderColor ? props.borderColor: `transparent`}; 
  color:            ${props =>props.txtColor ? props.txtColor: `var(--primaryLight)`};
  cursor: pointer;
  display: ${props => props.display ?  props.display: `inline-block` };
  font-family: var(--mainFF);
  font-weight: 300;
  font-style: normal;
  font-size: 1.2rem;
  letter-spacing: var(--altSpacing);
  max-width: 75vw;
  padding: .4rem 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all var(--mainTransition);
  &:hover{
    background-color: transparent;
    border-color:     ${props => props.borderColor? props.borderColor: `var(--primaryBlack)`};
    color:            ${props => props.borderColor? props.borderColor:`var(--primaryBlack)`};
    cursor: pointer;
  }
  @media(min-width: 768px){
    margin: 1rem;
  }
`
