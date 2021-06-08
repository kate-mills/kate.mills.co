import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import { useColorsContext } from '../context/state-colorgen/context/colors_context'
import ColorList from '../components/ColorSchemeGenerator/ColorList'
import styled from 'styled-components'

const ColorSchemes = () => {
  const {all_colors, updatePendingColors} = useColorsContext()

  const handleClickCopyColors = ()=>{
    let hexes = [`Your Next Color Scheme`]
    let tempColors = [...all_colors]
    tempColors.forEach(clr=>{
      if(clr.onHold) hexes.push(clr.hex)
    })
    hexes = hexes.join('\n')
    navigator.clipboard.writeText(hexes)
  }
  
  return (
    <Layout>
      <FullSeo title="Color Schemes" noindex />
      <ColorSchemeWrapper>
          <div className="app-nav">
            <button tabIndex="0" className="btn" onClick={handleClickCopyColors}>copy colors</button>
            <button tabIndex="0" className="btn" onClick={()=>updatePendingColors([...all_colors])}>generate</button>
          </div>
            <ColorList colors={all_colors}/>
        </ColorSchemeWrapper>
    </Layout>
  )
}

export default ColorSchemes

const ColorSchemeWrapper = styled.div`
  & div.app-nav{
    align-items: center;
    display: flex;
    height: 2.1rem;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    button.btn {
      border: none;
      background: var(--primaryWhite);
      color: var(--primaryBlack);
      cursor: pointer;
      font-family: var(--mainFF);
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: var(--altSpacing);
      outline-color: transparent; 
      padding: 0.15rem .15rem;
      text-transform: uppercase;
      transform: translateX(10px) translateY(0);
    }
    button.btn:hover{
    }
  }

  @media screen and (max-width:1200px){
    div.btn-div{
      flex-wrap: wrap;
      width: 100%;
    }
  }

`
