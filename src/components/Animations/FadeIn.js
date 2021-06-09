import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import { useGlobalContext } from '../../context/context';


const FadeInDiv = ({children}) => {
 const { closeSubmenu } = useGlobalContext();
 return (
   <FadeInDivContainer
     onFocus={closeSubmenu}
     onMouseOver={closeSubmenu}
   >
     {children}
  </FadeInDivContainer>
 )
}
export default FadeInDiv

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDivContainer = styled.div`
  animation: 1s ${fadeInAnimation};
  animation-duration: 2s;
`;
