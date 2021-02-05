import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, className}) => {
  return <Link to={to} className={`${className}`}>{text}</Link>
}

export default styled(Btn)`
  background-color: ${props => props.backgroundColor ? props.backgroundColor:`transparent`};
  background-color: var(--primaryColor);
  border-width: 3px;
  border-color: ${props =>  props.borderColor ? props.borderColor: `var(--primaryColor)`};
  border-style: solid;
  color:var(--primaryBlack);
  cursor: pointer;
  display: ${props => props.display ?  props.display: `inline-block` };
  letter-spacing: 0.3rem;
  max-width: 75vw;
  margin: 1rem;
  padding: .8rem 5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all var(--mainTransition);
  font-family: aileron, sans-serif;
  font-weight: 700;
  font-style: normal;

  &:hover{
    border-color: var(--primaryBlack);
    background-color: transparent;
    color: var(--primaryBlack) !important;
    cursor: pointer;
  }
`
  //font-family: brandon-grotesque, sans-serif;*/
  //*background-color: var(--primaryWhite); color: var(--primaryBlack) !important;*/

