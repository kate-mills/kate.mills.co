/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import * as React from 'react'
import styled from 'styled-components'
import { useColorsContext } from '../../context/state-colorgen/context/colors_context'
import {FaLock, FaLockOpen} from 'react-icons/fa'

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
      className={`${onHold ? 'locked random-color':'unlocked random-color'}`}
      style={{backgroundColor: `${hex}`, opacity: 1}}
    >
      <p className="copy-hex" title="copy hex" onClick={handleHexClick} role="button" tabIndex="0" onKeyPress={handleHexClick}>{hex}</p>
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
    letter-spacing: var(--midSpacing);
    padding: .8rem 2rem;
    font-size: 1.1rem;
    text-transform: none;
    position: relative;
    min-height: 500px;
    align-content: space-between;
    transition: var(--mainTransition);
  }
  .copy-hex,
  .lock-container{
    align-items: center;
    cursor:pointer;
    display: flex;
    height: 35%;
    justify-content: center;
    margin-bottom: 0;
    width: 100%;
    position: absolute;
  }
  .copy-hex{top:18%;}
  .lock-container{bottom:10%;}
  &.unlocked{
    .lock-container{
      svg.unlock-icon{height:1.2rem;opacity:.3;}
    }
    .lock-container:hover{
      svg.unlock-icon{opacity:1;}
    }
  }
  &.locked{
    .lock-container{svg.lock-icon{height:1.5rem;width:1.3rem;}}
  }
  .alert {
    font-size: 0.85rem;
    position: absolute;
    text-transform: uppercase;
    top: 15%;
  }
  @media(max-width:576px){
    &{
      letter-spacing: var(--altSpacing);
      min-height: 200px;
    }
  }
`
export default RandomColor
