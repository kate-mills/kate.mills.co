import * as React from 'react'
import styled from 'styled-components'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert,setAlert] = React.useState(false)
  const bcg = rgb.join(', ')
  const hexValue = `#${hex}`
  

  return (
    <SingleColorWrapper
      onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      className={`${(index>11)?'light-txt':''}`}
      style={{backgroundColor: `rgb(${bcg})`}}
    >
      <p className="percent-value">rgba({bcg}, {weight})</p>
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
    margin-bottom: 0;
  }
  &.light-txt p{
    color: var(--primaryWhite) !important;
  }
  .alert {
    position: absolute;
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    bottom: 0;
  }
`
export default SingleColor
