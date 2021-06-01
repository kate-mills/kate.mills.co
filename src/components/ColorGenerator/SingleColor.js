import * as React from 'react'
import styled from 'styled-components'

const SingleColor = ({colorGroup,rgb, weight, index, hex }) => {
  const [alert,setAlert] = React.useState(false)
  const bcg = rgb.join(', ')
  const hexValue = `#${hex}`

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])
  

  return (
    <SingleColorWrapper
      onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      className={colorGroup}
      style={{backgroundColor: `rgb(${bcg})`}}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
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
