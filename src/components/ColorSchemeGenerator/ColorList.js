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
    grid-template-columns: repeat(auto-fit, minmax(123.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
  }
  @media screen and (max-width: 576px){
    &{
      grid-template-columns: repeat(auto-fit, minmax(123.33px, 1fr));
      grid-template-rows: repeat(auto-fit, minmax(41px, 1fr));
    }
  }

`
