import React from 'react'
import styled, { keyframes } from 'styled-components'

const SlideBox = ({children}) => {
 return (
  <Container>
     {children}
  </Container>
 )
}
export default SlideBox


const slideInRight = keyframes`
 0% {
   opacity: 0;
 }
 80% {}
 100% {
   opacity: 1;
 }
`
const Container = styled.div`
 animation-name: ${slideInRight};
 animation-duration: 8s;
 animation-iteration-count:1;

`
