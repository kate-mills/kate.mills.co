import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import styled from 'styled-components'
import SingleColor from '../components/ColorGenerator/SingleColor'
import Values from 'values.js'
import {getUniqueColors, listOfColors} from '../utils/helpers'

const ColorGeneratorPage = ()=> {
  const [color,setColor] = React.useState('');
  const [error,setError] = React.useState(false);
  const [list, setList ] = React.useState([]);
  const [placeValue, setPlaceValue] = React.useState('yellow')
  const focusMethod = () =>{document.getElementById('hex-input').focus()};
  const getValues = (clr) => {return new Values(clr).all(5)};
  const setSlicedColors = (clrs) =>{setList(clrs.slice(1))};

  const iterPlaceVal = () => {
    let cIdx = listOfColors.indexOf(placeValue)
    setPlaceValue(
      (cIdx <= listOfColors.length-2)
      ?listOfColors[cIdx + 1]
      :listOfColors[0]
    )
  }

  const clearForm = () => {
    setError(false)
    setColor('')
    iterPlaceVal()
  };

  React.useEffect(()=>{
    let colors = getValues('#C7A0A1')
    let uniqueColors = getUniqueColors(colors)
    setSlicedColors(uniqueColors)
    focusMethod()
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(color){
      try {
        let colors = getValues(color)
        let uniqueColors = getUniqueColors(colors)
        setError(false)
        setSlicedColors(uniqueColors)
      }catch(error){
        try{
          let colors = getValues('#'.concat(color))
          let uniqueColors = getUniqueColors(colors)
          setError(false)
          setSlicedColors(uniqueColors)
        }catch(err){
          setError(true)
        }
      }
    }
    focusMethod()
  };

  const handleHexInputChange = (e) =>{
    let clr = e.target.value.trim().toLowerCase()
    setColor(clr)
  }

  return(
    <Layout>
      <FullSeo
        title="Build A Gorgeous Colorscheme"
        description="Get tints & shades of any color & build a gorgeous coloscheme for your next digital project."
      />
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
              placeholder={`Eg: ${placeValue}`}
              onChange={handleHexInputChange}
              className={`${error ? 'error' : null}`}
              tabIndex="0"
              autoComplete="off"
            />
            <button tabIndex="0" className="btn" type="submit">submit</button>
            <button tabIndex="0" className="btn clear-btn" id="clear" onClick={clearForm}>clear</button>
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
    padding: 0 0 1rem;
    h2{
      color: var(--primaryBlack2);
      font-size: 2rem;
      max-width: 90%;
      margin: auto;
      margin-bottom: 2rem;
      text-align: center;
      white-space: pre-line;
      overflow-wrap: break-word;
      word-spacing: var(--wordSpacing);
      transform: translateY(-30px);
    }
    form{
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
      width: 100vw;
      margin: 0 auto;
      transform: translateX(-1rem) translateY(-30px);
      input {
        background: transparent;
        min-width: 300px;
        outline: none;
        outline-bottom: 2px solid var(--primaryColor);
        outline-color: transparent; 
        border: none;
        border-bottom: 4px solid var(--digitalColor);
        letter-spacing: var(--midSpacing);
        letter-spacing: var(--midSpacing);
        padding: 0.5rem 2rem 0.5rem 1rem;
        font-size: 1rem;
        ::placeholder{
          width: fit-content;
          font-size: 1.5rem;
          color:#b1b2b6;
        }
      }
      .btn {
        outline-color: var(--primaryColor); 
        background: var(--digitalColor);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: 1px solid var(--digitalColor);
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        text-transform: capitalize;
        color: var(--primaryWhite);
        cursor: pointer;
        transform: translateX(10px) translateY(0);
      }
      input.error {
        outline-color: red;
        border-color: red;
      }
      .clear-btn{
        background: var(--solutionsColor);
        color: var(--primaryBlack2);
        transform: translateX(12px) translateY(0);
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
        justify-content: flex-start;
        flex-direction: column;
        transform: translateX(0) translateY(-35px);
        input{
          min-width: 75%;
        }
        .btn{
          min-width: 37.5%;
          transform: translateX(0) translateY(10px);
          margin: 2px auto;
        }
      }
    }
  }
`

export default ColorGeneratorPage
