import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed';

const Banner = ({ title, showTyping, overrideTxt, children, className}) => {
  const typeit = [
    `CSS, Node.js,  HTML, JavaScript, React, jQuery, Bootstrap`,
  ]
  return (
    <div className={className}>
      <div className="parent-div">
      <h1 className="title-heading">{title}</h1>
        {!!showTyping
          ?<Typed className="title-typing" strings={typeit} typeSpeed={40} backSpeed={50} />
          :<div className="katemills">{overrideTxt}</div>
        }
      </div>
      <div
          className="child-div"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="100">
      {children}
      </div>
    </div>
  )
}
Banner.defaultProps={
}

export default styled(Banner)`
  &{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${props => props.color || 'var(--clr-primary-dark)'};
    width: 100%;
    height: ${props => props.height || '30vh'};
    text-align: center;
    letter-spacing: var(--mainSpacing);
    h1.title-heading {
      position: relative;
      display: block;
      font-size: 3.3rem;
      text-transform: capitalize;
      letter-spacing: var(--altSpacing);
    }
    .title-typing {
      display: block;
      font-style: italic;
      font-size: 1.5rem;
      letter-spacing: var(--midSpacing);
      max-width: 90%;
      margin: 0 auto;
      position: relative;
    }
    div.parent-div{
      padding-top: 2rem;
      width: 100vw;
    }
    div.child-div{
      width: 100vw;
      padding: 1rem;
      margin-bottom: 5rem;
    }
  }
  @media screen and (min-width: 768px) {
    &{
      h1.title-heading {
        margin-top: 3rem;
        font-size: 4.5rem;
      }
      .title-typing {
        width: 100%;
      }
    }
  }
`
