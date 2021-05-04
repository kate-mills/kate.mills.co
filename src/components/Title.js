import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, className}) => {
  return (
    <div className={className}
      data-sal="zoom-in"
      data-sal-easing="ease"
      data-sal-duration="500">
      <p className="heading">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </p>
    </div>
  )
}

export default styled(Title)`
  font-size: 2.5rem;
  letter-spacing: 7px;
  margin-top: 0;
  margin-bottom: 1.25rem;
  text-align: center;
  text-transform: capitalize;

  .title {
    font-family: var(--mainFF);;
    color: ${props => props.titleColor || 'var(--primaryBlack)'};
  }
  .subtitle {
    font-family: var(--mainFF);;
    color: var(--digitalColor);
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
