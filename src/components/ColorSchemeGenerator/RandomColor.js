/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import * as React from 'react'
import styled from 'styled-components'
import { useColorsContext } from '../../context/state-colorgen/context/colors_context'
import {FaLock, FaLockOpen} from 'react-icons/fa'
import {FiCopy} from 'react-icons/fi'
import {top_half_of_app_height as xx} from '../../context/state-colorgen/helpers'

const RandomColor = ({id, index, hex, onHold}) => {

  const {toggleSingleColor} = useColorsContext()

  const [alert,setAlert] = React.useState(false)
  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  const handleHexClick=()=>{
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }
  return (
    <RandomColorWrapper className={`${onHold ? 'on-hold':'pending-color'}`}style={{backgroundColor: `${hex}`, opacity: 1}}>
      {alert && <p className="alert">Copied</p>}
      <p className="lock-container" title="toggle lock" onClick={()=>toggleSingleColor(id)} role="button" aria-label="toggle lock" tabIndex="0" onKeyPress={()=>toggleSingleColor(id)}>
        {onHold?<FaLock className="lock-icon"/>:<FaLockOpen className="unlock-icon"/>}</p>

      <p className="copy-container" title="copy hex" onClick={handleHexClick} role="button" aria-label="Copy hex" tabIndex="0" onKeyPress={handleHexClick}><FiCopy/></p>

      <p className="hex-value" title="copy hex" onClick={handleHexClick} role="button" tabIndex="0" onKeyPress={handleHexClick}>{hex.slice(1)}</p>
    </RandomColorWrapper>
  )
}
const RandomColorWrapper = styled.article`
  & {
    align-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    justify-content:center;
    min-height: calc(100vh - ${xx}px);
    outline-color:transparent;
    padding: .8rem 2rem;
    position: relative;
    text-transform: none;
    transition: var(--mainTransition);
  }
  .alert,
  .lock-container,
  .copy-container,
  .hex-value{
    font-size: 1rem;
    outline:none;
    align-items: center;
    cursor:pointer;
    display: flex;
    height: 20%;
    justify-content: center;
    margin-bottom: 0;
    width: 100%;
    opacity: 1;
    :hover{opacity:1;}
    position: absolute;
  }
  .alert {
    text-transform: uppercase;
    letter-spacing: var(--midSpacing);
    bottom: 25%;
  }
  .copy-container{
    top: 20%;
    svg{font-size:1.5rem; }
  }
  .hex-value{
    bottom:0;
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: var(--altSpacing);
    font-family: neue-haas-unica, sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  &.pending-color{
    .lock-container{
      :hover{opacity:1;}
      opacity: .3;
      svg.unlock-icon{
        height:1.3rem;
        width: 1.3rem;
      }
    }
  }
  &.on-hold{
    .lock-container{
      .lock-icon{
        height:1.7rem;
        width: 1.7rem;
      }
    }
  }
  @media(max-width:750px){
    &{
      min-height: calc(50vh - ${xx/2}px);
    }
  }
`
export default RandomColor
