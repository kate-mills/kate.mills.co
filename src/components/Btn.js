import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, className}) => {
  return <Link to={to} className={`${className}`}>{text}</Link>
}

export default styled(Btn)`
  background-color: var(--primaryColor);
  border-width: 3px;
  border-color: ${props =>  props.borderColor ? props.borderColor: `var(--primaryColor)`};
  border-style: solid;
  color:var(--primaryBlack);
  cursor: pointer;
  display: ${props => props.display ?  props.display: `inline-block` };
  font-family: var(--pFF);
  font-weight: 700;
  font-style: normal;
  font-size: 1.3rem;
  margin: 1rem;
  max-width: 75vw;
  padding: .8rem 6rem;
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  transition: all var(--mainTransition);

  &:hover{
    border-color: ${props =>  (!props.borderColor)? `var(--primaryBlack)`: `var(--primaryDark)`};
    color: ${props =>  (!props.borderColor)? `var(--primaryBlack)`: `var(--primaryDark)`} !important;
    background-color: transparent;
    cursor: pointer;
  }
`
