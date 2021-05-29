import React from 'react'
import styled, { keyframes } from 'styled-components'

import { useGlobalContext } from '../../context/context';

const SlideBox = ({children}) => {
 const { closeSubmenu } = useGlobalContext();
 return (
   <Container 
     onFocus={closeSubmenu}
     onMouseOver={closeSubmenu}
   >
     {children}
  </Container>
 )
}
export default SlideBox

const fadeIn = keyframes`
 0% {
  opacity: 0;
 }
  60% {
    opacity: .50;
  }
  80% {
    opacity: .70;
  }
  90% {
    opacity: .80;
  }
 100% {
   opacity: 1;
 }
`
const Container = styled.div`
  animation-name: ${fadeIn};
  animation-duration: ${props => props.time || '1s'};
  animation-iteration-count:1;
`
