import * as React from 'react'
import styled from 'styled-components'
import {useColorContext} from '../../context/colors'

const SingleColor = ({id, index, hex}) => {
  const {updateSingleColor} = useColorContext()

  const [active, setActive] = React.useState(false)
  const [alert,setAlert] = React.useState(false)
  const hexValue = `#${hex}`

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])
  

  return (
    <SingleColorWrapper
      className={`${active ? 'active':'inactive'}`}
      onClick={()=>{
        setActive(prev => !prev)
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
        updateSingleColor(id)
      }}
      style={{backgroundColor: `#${hex}`}}
    >
      <p className="percent-value">#{hex}</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </SingleColorWrapper>
  )
}
const SingleColorWrapper = styled.article`
  & {
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    padding: .8rem 2rem;
    cursor: pointer;
    font-size: 1.1rem;
    text-transform: none;
    position: relative;
    min-height: 150px;
    align-content: space-between;
  }
  &.active{ background-color: yellow; border: 5px solid yellow; }
  &.inactive{ border: 5px solid transparent; }
  .percent-value {
    margin-bottom: 0;
  }
  .color-value {
    letter-spacing: var(--midSpacing);
    margin-bottom: 0;
  }
  &.group-1-lightest-txt p{
    color: var(--primaryBlack) !important;
  }
  &.group-2-md-txt p{
    color: var(--primaryBlack2) !important;
  }
  &.group-3-darkest-txt p{
    color: var(--primaryWhite) !important;
  }
  .alert {
    position: absolute;
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    bottom: 0;
  }
  @media(max-width:576px){
    &.darkest-txt:nth-of-type(1){
      display: none;
    }
    .alert{
      font-size: 0.64rem;
    }
  }
`
export default SingleColor
