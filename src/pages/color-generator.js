import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import styled from 'styled-components'

import SingleColor from '../components/ColorGenerator/SingleColor'
import Values from 'values.js'

const ColorGeneratorPage = ()=> {
  const [color,setColor] = React.useState('');
  const [error,setError] = React.useState(false);
  const [bgClr,setBgClr] = React.useState('#40e0d0')
  const [list, setList ] = React.useState([]);
  const [emsg, setEmsg ] = React.useState('')

  React.useEffect(()=>{
    let colors = new Values('#40e0d0').all(10)
    setList(colors)
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setError(false)
      setList(colors)
    }catch(error){
      setError(true)
    }
  }
  const getErrMsg = (len, clr) =>{
    if(clr[0] !== '#'){
      return 'Input must start with #'
    }
    else if (len < 4){ //'#fff'
      return ((len === 1) ? `${clr}___`:(len===2) ? `${clr}__`:`${clr}_`)
    }
    else if(len === 6){ //'#fffff'
      return `${clr}_`
    }
    else if (len > 7){
      return 'Input is too long'
    }
    else if((len === 4)||
      (len === 5)||
      (len === 7)){
      return `${clr}`
    }
  }
  const errMsg = {
    color: 'transparent',
    len: (num) => (num <= 3 || (num > 7) || (num === 6)),
    hash: (str) => (str !== '#'),
  }
  const handleInputChange = (e) =>{
    let clr = e.target.value
    let len = e.target.value.length
    setColor(clr)
    setEmsg(getErrMsg(len, clr))
    if(!errMsg.len(len)) {
      setBgClr(e.target.value)
    }
    else{ setBgClr(errMsg.color) }
  }
  return(
    <Layout>
      <FullSeo title="Color Generator"/>
      <div style={{marginTop: '2rem'}}/>
      <Banner title="Color Generator" info=""/>
      <ColoredGeneratorWrapper>
        <section className="container">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              value={color}
              placeholder={`#f01011`}
              onChange={handleInputChange}
              className={`${error ? 'error' : null}`}
            />
            <button className="btn" type="submit">submit</button>
          </form>
          <div className="display-color-container">
            <div style={{backgroundColor: `${bgClr}`}} className="display-color"/>
          </div>
        </section>
        <div className="display-err-container">
          {emsg}
        </div>
        <section className="colors">
          {
            list.map((color, index)=>{
              const {hex} = color
              return(
                <SingleColor
                  key={index}
                  index={index}
                  hex={hex}
                  {...color}/>
              )
            })
          }
        </section>
      </ColoredGeneratorWrapper>
    </Layout>
  )
}


const ColoredGeneratorWrapper = styled.div`
  & .container {
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100px;
    form{
      display: block;
      width: 100vw;
      input {
        border: 2px solid var(--digitalColor);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
      }
      .btn {
        background: var(--digitalColor);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-color: transparent;
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        text-transform: capitalize;
        color: var(--primaryWhite);
        cursor: pointer;
      }
      input.error {
        border-color: red;
      }
    }
    .display-color-container{
      min-height: 2rem;
      width: 100%;
      margin: 1rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .display-color{
        border: 1px solid silver;
        border-radius: 50rem;
        height: 2rem;
        width: 2rem;
      }
    }
  }
  .display-err-container{
    margin: 0 auto;
    text-align: center;
    height: 5rem;
    min-height: 5rem;
    max-height: 5rem;
  }
  & .colors {
    min-height: 55vh;
    text-align: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
  }
  @media (max-width: 576px) {
    & .container{
      justify-content: flex-start;
    }
  }
`

export default ColorGeneratorPage
