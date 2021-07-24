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
  font-size: 3rem;
  letter-spacing: var(--altSpacing);
  margin: 0 auto;
  margin-bottom: 1.25rem;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 0 0 var(--primaryBlack2);

  .title {
    font-family: var(--altFF);
    font-weight: 400;
    font-style: italic;
    color: ${props => props.titleColor || 'var(--primaryBlack2)'};
    text-shadow: 0 0 var(--primaryBlack2);
  }
  .subtitle {
    font-family: var(--altFF);
    font-weight: 400;
    font-style: italic;
    color: var(--primaryColor);
    text-shadow: 0 0 var(--primaryBlack2);
  }
  span {
    display: inline-block;
    margin: 0 0.35rem;
  }
  @media(max-width: 500px){
    font-size: 2rem;
  }
`
