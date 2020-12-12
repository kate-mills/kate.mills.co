import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink/Fade'

const Btn = ({to, text, color, className}) => {
  return <AniLink fade to={to} className={`${className}`}>{text}</AniLink>
}

export default styled(Btn)`
  background-color: ${props => props.color ?
      props.colorful ? props.color:`transparent`
      : `transparent`};
  border-width: 3px;
  border-color: ${props =>  props.color !== `white`  ?  props.color : `white`};
  border-style: solid;
  color: ${props => props.color ?
      props.colorful ? `var(--mainWhite)`: props.color
      : `var(--mainWhite)`
      };
  cursor: pointer;
  display: inline-block;
  letter-spacing: 0.3rem;
  max-width: 75vw;
  margin: 1rem;
  padding: 1.3rem 3rem;
  text-align: center;
  text-decoration: ${props => props.underline || `none`};
  text-transform: uppercase;
  transition: all 0.3s linear;

  &:hover{
    background-color: ${props => (props.colorful || !props.color) ? `#edf3f22e`: props.color };

    color: ${props => props.color ?
        props.colorful ? props.color: `white`
        : `white`
        };
  }
`
