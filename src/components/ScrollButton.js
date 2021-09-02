import React from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'
import {AppContext} from '../context/context'
import styled from 'styled-components'

const ScrollButton = ()=>{
  const {height} = React.useContext(AppContext);

  const scrollBackToTop = ()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return(
    <ScrollButtonWrapper>
      <button className={ height > 150 ? "scroll-btn show-scroll-btn": "scroll-btn" }
      onClick={scrollBackToTop}
    >
      <FaAngleDoubleUp title="Back to top!"/>
      </button>
    </ScrollButtonWrapper>
  )
}

const ScrollButtonWrapper = styled.div`
  &{
    position:relative;
    cursor: pointer;
    .scroll-btn {
      position: fixed;
      right: 1.5rem;
      bottom: 1.5rem;
      background:transparent; 
      color: var(--clr-primary-medium);
      z-index: -100;
      opacity: 0;
      transition: var(--mainTransition);
      font-size: 2rem;
      line-height: 0;
      padding: 0.3rem 0.5rem;
      cursor: pointer;
      border: none;
      outline: none;
    }
    .show-scroll-btn {
      z-index: 100;
      opacity: 1;
    }
  }

`

export default ScrollButton
