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

  .title, .subtitle {
    color: ${props => props.titleColor || 'var(--clr-primary-dark)'};
    font-family: var(--lustBold);
    font-weight: 700;
    text-transform: capitalize;
    /*text-shadow: 0 0 var(--clr-primary-darkest);*/
  }

  span {
    display: inline-block;
    margin: 0 0.35rem;
  }
  @media(max-width: 500px){
    font-size: 2rem;
  }
`
