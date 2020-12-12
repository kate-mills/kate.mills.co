import React from 'react'
import styled from 'styled-components'

const Title = ({ titleColor, subtitleColor, title, subtitle, className}) => {
  return (
    <div className={className}>
      <p className="heading">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </p>
    </div>
  )
}

export default styled(Title)`
  font-size: 2.7rem;
  font-weight: 700;
  letter-spacing: 7px;
  margin-bottom: 1.25rem;
  text-align: center;
  text-transform: uppercase;

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
