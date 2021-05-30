import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import styled from 'styled-components'

import SingleColor from '../components/ColorGenerator/SingleColor'
import Values from 'values.js'
import {getUniqueColors} from '../utils/helpers'


const ColorGeneratorPage = ()=> {
  const [color,setColor] = React.useState('');
  const [error,setError] = React.useState(false);
  const [list, setList ] = React.useState([]);

  const focusMethod = () =>{
    document.getElementById('hex-input').focus()
  }

  React.useEffect(()=>{
    let colors = new Values('#C7A0A1').all(8)
    let uniqueColors = getUniqueColors(colors)
    setList(uniqueColors)
    focusMethod()
  }, [])


  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(5)
      let uniqueColors = getUniqueColors(colors)
      setError(false)
      setList(uniqueColors)
    }catch(error){
      try{
        let colors = new Values('#'.concat(color)).all(5)
        let uniqueColors = getUniqueColors(colors)
        setError(false)
        setList(uniqueColors)
      }catch(err){
        setError(true)
      }
    }
    focusMethod()
  }

  const handleHexInputChange = (e) =>{
    let clr = e.target.value.trim().toLowerCase()
    setColor(clr)
  }
  return(
    <Layout>
      <FullSeo title="Color Generator"/>
      <ColoredGeneratorWrapper>
        <Banner
          className="background-pattern-rain-dark"
          title="Gorgeous Colors"
          info="Get tints & shades of any color & build a gorgeous coloscheme."
        >
        </Banner>
        <section className="container background-pattern-rain-dark">
          <h2>Enter a hexadecimal or basic color value</h2>
          <form onSubmit={handleSubmit} className="form background-pattern-rain-dark">
            <input
              id="hex-input"
              type="text"
              value={color}
              placeholder={`Try pink or #ff0000`}
              onChange={handleHexInputChange}
              className={`${error ? 'error' : null}`}
              tabIndex="0"
              autoComplete="off"
            />
            <button tabIndex="0" className="btn" type="submit"
            >submit</button>
          </form>
        </section>
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
    padding: 0 0 2rem;
    h2{
      font-size: 2rem;
      max-width: 90%;
      margin: auto;
      margin-bottom: 2rem;
      text-align: center;
    }
    form{
      display: block;
      width: 100vw;
      input {
        min-width: 15%;
        outline-color: var(--primaryColor);
        border: 2px solid var(--digitalColor);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        letter-spacing: var(--midSpacing);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        ::placeholder{
          color: var(--solutionsColor);
          }
          letter-spacing: var(--midSpacing);
        }
      }
      .btn {
        outline-color: var(--primaryColor);
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
        outline-color: red;
        border-color: red;
      }
    }
  }
  & .colors {
    text-align: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
  }
  & > div h1,
  & > div h1 span.title-l2 {
    margin-bottom: 0;
  }
  @media (max-width: 576px) {
    & .container{
      justify-content: flex-start;

      form{
        input{
          min-width: 60%;
        }
      }
    }
  }
`

export default ColorGeneratorPage
