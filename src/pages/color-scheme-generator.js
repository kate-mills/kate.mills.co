import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import { useColorsContext } from '../context/state-colorgen/context/colors_context'
import {copyColorScheme} from '../context/state-colorgen/helpers'
import ColorList from '../components/ColorSchemeGenerator/ColorList'
import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

const flashAnimation = keyframes`${flash}`;


const ColorSchemes = () => {
  const {all_colors, updatePendingColors} = useColorsContext()
  const [alert,setAlert] = React.useState(false)
  // Move to Context
  const [clickCount, setClickCount] = React.useState(0)

  const refContainer = React.useRef(null);
  const focusMethod = () =>{document.getElementById('generator').focus()};

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  React.useEffect(()=>{
    // only listen to for click inside refContainer not entire page
    const event = refContainer.current.addEventListener('click',(e)=>{focusMethod()})
    return refContainer.current.removeEventListener('click', event)
  },[])

  React.useEffect(()=>{
    focusMethod()
  },[])

  const handleClickCopyColors = ()=>{
    focusMethod()
    copyColorScheme(all_colors)
    setAlert(true)
    setClickCount(prevCount => 'clicked')
  }
  const handleGenerate = ()=>{
    updatePendingColors([...all_colors])
    setClickCount(prevCount => prevCount+=1)
  }
  
  return (
    <Layout>
      <FullSeo title="Color Scheme Generator" image="/images/color-scheme-generator.jpg"/>
      <ColorSchemeWrapper ref={refContainer}>
          <div className="app-nav">
            <button
              tabIndex="0"
              className={`${(clickCount <1)? 'flash':''} btn generate`}
              onClick={handleGenerate}
              aria-label="generate color scheme"
              id="generator"/>
            {alert ? <span className="alert">COPIED</span>:<span className="alert general"></span>}
            <button tabIndex="0" className={`btn copy ${(clickCount > 3 && clickCount!=='clicked')?'flash':''}`} onClick={handleClickCopyColors} aria-label="copy color scheme"></button>
          </div>
            <ColorList colors={all_colors}/>
        </ColorSchemeWrapper>
    </Layout>
  )
}

export default ColorSchemes

const ColorSchemeWrapper = styled.div`
  background: var(--bg-dark);
  color: var(--bg-dark-txt);

  & div.app-nav{
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 3rem;
    margin: 0;
    padding: 0 2rem;
    width: 100%;
    >.flash{
      animation: 3s ${flashAnimation};
      animation-iteration-count: infinite;
    }
    > span,> button{
      border: none;
      font-family: var(--mainFF);
      font-size: 1.1rem;
      line-height: normal;
      margin: 0;
      min-width:33.3333%; 
      outline: none;
      overflow-wrap: break-word;
      text-align: center;
      white-space: pre-line;
    }
    button.btn{
      background: inherit;
      border: none;
      color: inherit;
      cursor: pointer;
      letter-spacing: var(--altSpacing);
      outline: none;
    }
    button.btn.generate{ transform: translateX(0);min-width:40%;}
    button.btn.copy{ transform: translateX(0); min-width:40%;}
    button.btn.generate:before{content:'Press the spacebar to generate color palettes!';}
    button.btn.copy:before{ content:'Copy color palette!';}
    span.alert{color: inherit;font-family: var(--mainFF);min-width:20%;}
  }
  @media screen and (max-width:1200px){
    & div.app-nav{
      > span,> button{font-size:1rem;}
    }
  }

  @media screen and (max-width: 646px){
    & div.app-nav{
      button.btn.generate:before{content:'Generate\ncolors!';}
      button.btn.copy:before{content:'Copy colors!';}
    }
  }
  @media screen and (max-width: 500px){
    & div.app-nav{
      > span,> button{font-size:1rem;}
      button.btn.generate{transform:translateX(-10px);}
      button.btn.copy{transform:translateX(10px);}
      span.alert.general{color: transparent;}
    }
  }

`

