import React from 'react'
import styled, { keyframes } from 'styled-components'

const CustomBox= (props) => {
 return (
   <Container>
     {props.children}
  </Container>
 )
}
export default CustomBox

const customFadeIn = keyframes`
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
  animation-name: ${customFadeIn};
  animation-duration: ${props => props.time ? props.time:'3s'};
  animation-iteration-count:1;
`
