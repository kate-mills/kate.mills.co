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
            <button tabIndex="0" className="btn btn" onClick={()=>updatePendingColors([...all_colors])}>generate</button>
            <button tabIndex="0" className="btn btn" onClick={handleClickCopyColors}>copy locked colors</button>
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
    height: 3rem;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    .btn {
      background: var(--solutionsColor);
      border: 1px solid var(--solutionsColor);
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      font-size: 1rem;
      color: var(--primaryBlack2);
      cursor: pointer;
      outline-color: var(--primaryColor); 
      padding: 0.5rem 1rem;
      text-transform: capitalize;
      transform: translateX(10px) translateY(0);
    }
  }

  @media screen and (max-width:1200px){
    div.btn-div{
      flex-wrap: wrap;
      width: 100%;
    }
  }

`
