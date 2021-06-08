/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import * as React from 'react'
import styled from 'styled-components'
import { useColorsContext } from '../../context/state-colorgen/context/colors_context'
import {FaLock, FaLockOpen} from 'react-icons/fa'
import {FiCopy} from 'react-icons/fi'

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
    <RandomColorWrapper
      className={`${onHold ? 'on-hold':'pending-color'}`}
      style={{backgroundColor: `${hex}`, opacity: 1}}
    >
      <p className="hex-value" title="copy hex" onClick={handleHexClick} role="button" tabIndex="0" onKeyPress={handleHexClick}>{hex}</p>
      <p className="copy-container" title="copy hex" onClick={handleHexClick} role="button" tabIndex="0" onKeyPress={handleHexClick}><FiCopy/></p>
      <p className="lock-container" title="toggle lock" onClick={()=>toggleSingleColor(id)} role="button" tabIndex="0" onKeyPress={()=>toggleSingleColor(id)}>
        {onHold
          ?<FaLock className="lock-icon"/>
          :<FaLockOpen className="unlock-icon"/>
        }
      </p>
      {alert && <p className="alert">Copied</p>}
    </RandomColorWrapper>
  )
}
const RandomColorWrapper = styled.article`
  & {
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    padding: .8rem 2rem;
    font-size: 1.1rem;
    text-transform: none;
    position: relative;
    min-height: 65vh;
    align-content: space-between;
    transition: var(--mainTransition);
    outline-color:transparent;
  }
  .hex-value,
  .copy-container,
  .lock-container{
    outline:none;
    align-items: center;
    cursor:pointer;
    display: flex;
    height: 20%;
    justify-content: center;
    margin-bottom: 0;
    width: 100%;
    position: absolute;
  }
  .copy-container{
    top: 20%;
    svg{font-size:1.5rem; }
  }
  .hex-value{
    bottom:0;
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1.3rem;
    letter-spacing: var(--midSpacing);
  }
  &.pending-color{
    .lock-container{
      svg.unlock-icon{
        height:1.3rem;
        width: 1.3rem;
        opacity:.3;
      }
    }
    .lock-container:hover{
      svg.unlock-icon{
        opacity:1;
      }
    }
  }
  &.on-hold{
    .lock-container{
      .lock-icon{
        opacity: 1;
        height:1.7rem;
        width: 1.7rem;
      }
    }
  }
  .alert {
    font-size: 1rem;
    position: absolute;
    text-transform: uppercase;
    letter-spacing: var(--midSpacing);
    bottom: 25%;
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 600;
    font-style: normal;
  }
  @media(max-width:576px){
    &{
      min-height: 40vh;
    }
  }
`
export default RandomColor
