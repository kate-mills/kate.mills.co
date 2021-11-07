import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed';

const TypedTitle = ({ title, strings, className}) => {
  return (
    <div className={className}>
        <span className="title">{title}</span>
      <h1 className="subtitle">
          <Typed
            strings={strings}
            typeSpeed={40}
            backspeed={50}
            loop
          />
      </h1>
    </div>
  )
}

export default styled(TypedTitle)`
    line-height: 72px;
    font-size: 60px;
    font-family: Lato;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    text-align: center;

  .title, .subtitle {
    color:#2d3748;
  }

  span {
    display: inline-block;
    margin: 0 0.35rem;
  }
  @media(max-width: 500px){
    font-size: 2rem;
  }
`
