import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import { useColorsContext } from '../context/state-colorgen/context/colors_context'
import ColorList from '../components/ColorSchemeGenerator/ColorList'
import styled from 'styled-components'

const ColorSchemes = () => {
  const {all_colors, updatePendingColors} = useColorsContext()
  const [alert,setAlert] = React.useState(false)

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])


  const handleClickCopyColors = ()=>{
    let hexes = [`Your Next Color Scheme`]
    let tempColors = [...all_colors]
    tempColors.forEach(clr=>{
      if(clr.onHold) hexes.push(clr.hex)
    })
    hexes = hexes.join('\n')
    setAlert(true)
    navigator.clipboard.writeText(hexes)
  }
  
  return (
    <Layout>
      <FullSeo title="Color Schemes" noindex />
      <ColorSchemeWrapper>
          <div className="app-nav">
            <button tabIndex="0" className="btn generate" onClick={()=>updatePendingColors([...all_colors])}></button>
            {alert ? <p className="alert">COPIED</p>:<p className="alert"></p>}
            <button tabIndex="0" className="btn copy" onClick={handleClickCopyColors}></button>
          </div>
            <ColorList colors={all_colors}/>
        </ColorSchemeWrapper>
    </Layout>
  )
}

export default ColorSchemes

const ColorSchemeWrapper = styled.div`
  & div.app-nav{
    align-content: center;
    align-items: center;
    display: flex;
    height: 2.2rem;
    margin: 0;
    padding: 0 2rem;
    width: 100%;
    > p,> button{
      font-family: var(--altFF);
      font-weight: 700;
      font-size: 1.2rem;
      transform: translateX(10px) translateY(0);
      line-height: normal;
      overflow-wrap: break-word;
      white-space: pre-line;
      word-spacing: 1px;
    }
    button.btn{
      background: transparent;
      border: none;
      color: var(--primaryBlack);
      cursor: pointer;
      letter-spacing: var(--altSpacing);
      margin: 0;
      outline-color: transparent; 
      text-align: center;
    }
    button.btn.generate:before{
      content:'generate color palette!';
      min-width: 30%;
    }
    button.btn.copy:before{
      content: 'copy color palette!';
      min-width: 25%;
    }
    .alert{
      height: 0;
      min-width: 50%;
      font-weight: 400;
      text-align: center;
    }
  }
  @media screen and (max-width:1200px){
    & div.app-nav{
      > p,> button{
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 500px){
    & div.app-nav{
      > p,> button{
        font-size: .75rem;
      }
      button.btn.generate:before{
        content:'generate colors!';
      }
      button.btn.copy:before{
        content: 'copy colors!';
      }
      .alert{
        transform:translateX(19px) translateY(3px)
        min-width: 30%;
      }
    }
  }

`
