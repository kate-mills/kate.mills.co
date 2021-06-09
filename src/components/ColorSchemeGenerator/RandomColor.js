/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import * as React from 'react'
import { useColorsContext } from '../../context/state-colorgen/context/colors_context'
import {FaLock, FaLockOpen} from 'react-icons/fa'
import {FiCopy} from 'react-icons/fi'
import {top_half_of_app_height as xx} from '../../context/state-colorgen/helpers'
import styled, {keyframes} from 'styled-components'
import {tada} from 'react-animations'
const tdA = keyframes`${tada}`

const TadaOpenLock = styled(FaLockOpen)`
  animation: 1s ${tdA},1s ${tdA},1s ${tdA},1s ${tdA},
  1s ${tdA},1s ${tdA},1s ${tdA},1s ${tdA},1s ${tdA},1s ${tdA};
  animation-delay:2s,10s,20s,30s,40s,50s, 60s, 70s, 80s, 90s;
`
const RandomColor = ({id, index, hex, onHold, textColor}) => {

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
    <RandomColorWrapper className={`${onHold ? 'holding-color':'pending-color'}`}style={{backgroundColor: `${hex}`, opacity: 1, color: textColor}}>

      {/* HEX VALUE */}
      <p
        className="hex-value"
        onClick={handleHexClick}
        onKeyPress={handleHexClick}
        role="button"
        tabIndex="0"
        title="copy hex">
        {hex.slice(1)}
      </p>

      {/* ALERT Copied */}
      {
        (!!alert)
          ?<p className="alert"><span>Copied</span></p>
          :<p className="alert"><span></span></p>
       }
      {/* Lock ICON */}
      <p
        aria-label="toggle lock"
        className="lock-container"
        onClick={()=>toggleSingleColor(id)}
        onKeyPress={()=>toggleSingleColor(id)}
        role="button"
        tabIndex="0"
        title="toggle lock">
        {onHold
          ?<FaLock className="lock-icon"/>
          :<TadaOpenLock className="unlock-icon"/>
        }
      </p>

      {/* Copy ICON */}
      <p
        aria-label="Copy hex"
        className="copy-container"
        onClick={handleHexClick}
        onKeyPress={handleHexClick}
        role="button"
        tabIndex="0"
        title="copy hex">
        <FiCopy/>
      </p>
    </RandomColorWrapper>
  )
}
const RandomColorWrapper = styled.article`
  & {
    position: relative;
    align-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    justify-content:center;
    min-height: calc(100vh - ${xx}px);
    outline-color:transparent;
    padding: .8rem 2rem;
    text-transform: none;
    transition: var(--mainTransition);
  }
  &.pending-color{
    :hover{
      .lock-container:before{}
    }
  }
  &.holding-color{
    :hover{
      .copy-container:before{}
    }
  }
  .lock-container,
  .alert,
  .copy-container,
  .hex-value{
    position: absolute;
    font-size: 1rem;
    outline:none;
    cursor:pointer;
    margin-bottom: 0;
    width: 100%;
    opacity: 1;
    :hover{opacity:1;}
  }
  .lock-container{
    bottom: 70%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    svg{
      height:1.9rem;
      width:1.5rem;
      :hover{opacity:1;}
    }
  }
  .alert {
    bottom: 25%;
    letter-spacing: var(--midSpacing);
    text-transform: uppercase;
  }
  .copy-container{
    bottom: 15%;
    svg{font-size:1.5rem; }
  }
  .hex-value{
    bottom:2%;
    font-size: 1.6rem;
    font-family: var(--altFF);
    font-style: normal;
    font-weight: 700;
    letter-spacing: var(--altSpacing);
    text-transform: uppercase;
  }
  &.pending-color{
    .lock-container{
      svg{opacity:.3;}
    }
    :hover{
      .lock-container{
        animation:1s ${tdA};
        svg{opacity:1;}
      }
    }
  }
  &.holding-color{
    .lock-container{
      .lock-icon{
        height:1.9rem;
        width: 1.5rem;
      }
    }
    :hover{
      .copy-container{
        svg{
          opacity:1;
          animation:1s ${tdA};
        }
      }
    }
  }

  @media(max-width:750px){
    &{
      display:grid;
      min-height: 16vh;
      grid-template-columns: repeat(4, 1fr);
      align-items: baseline;
    }
    .hex-value,
    .alert,
    .copy-container,
    .lock-container{
      position:unset;
      height: 100%;
    }
    .alert{
      display:relative;
      span{
        position:absolute;
        left: 10%; /* displays over hex value */
      }
    }
  }
`
export default RandomColor
