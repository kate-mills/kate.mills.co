import React from 'react'
import styled from 'styled-components'

const Title = ({ titleColor, subtitleColor, title, subtitle, className}) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: ${props => props.align || 'center'};
    letter-spacing: 7px;
    color: var(--primaryColor);
    color: ${props => props.color || 'var(--primaryColor)'};
  }
  .title {
    color: ${props => props.titleColor || 'var(--mainBlack)'};
  }
  .subtitle {
    color: ${props => props.subtitleColor || 'var(--primaryColor)'};
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
