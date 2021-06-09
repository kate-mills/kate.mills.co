import * as React from 'react'
import RandomColor from './RandomColor'
import styled from 'styled-components'

const ColorList = ({colors}) =>{
  return (
    <ColorListWrapper>
        {
          ((colors.length> 0) && (colors.map((clr, index)=>{
            return(
              <RandomColor
                key={index}
                index={index}
                {...clr}
              />
            )
          })))
        }
    </ColorListWrapper>
  )
}

export default ColorList

const ColorListWrapper = styled.section`
  &{
    text-align: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 750px){
    &{
      grid-template-columns: repeat(1, 100vw);
      grid-template-rows: repeat(5, 1fr);
    }
  }

`
