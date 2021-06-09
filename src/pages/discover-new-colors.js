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
  const setSlicedColors = (clrs) =>{setList(clrs.slice(0))};

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
      let isHex = color[0]==="#"
      let clr = isHex ? color:color.toLowerCase()
      try {
        let colors = getValues(clr) 
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
    setColor(e.target.value.trim())
  }

  const getColorGroup = (idx)=>{
    let GROUP_1 = 'group-1-lightest-txt'
    let GROUP_2 = 'group-2-md-txt'
    let GROUP_3 = 'group-3-darkest-txt'
    let oneThird = Number.parseInt(list.length/3)
    return (
      (idx <= oneThird)?GROUP_1:(
       idx <= oneThird*2)?GROUP_2 : GROUP_3
    )
  }


  return(
    <Layout>
      <FullSeo
        image="/images/color-generator.jpg"
        title="Build Gorgeous Color Schemes"
        description="Get tints & shades of any color & build gorgeous color schemes for your next digital project."
      />
      <ColoredGeneratorWrapper>
        <Banner
          className="polka-dots"
          title="Find the perfect Color"
          info="Get tints & shades of any color to build a gorgeous color scheme."
        >
        </Banner>
        <section className="container">
          <form onSubmit={handleSubmit} className="form">
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
            <button tabIndex="0" className="btn btn-dt" type="submit">submit</button>
            <button tabIndex="0" className="btn clear-btn" id="clear" onClick={clearForm}>clear</button>
            <button tabIndex="0" className="btn btn-mb" type="submit">submit</button>
          </form>
        </section>
        <section className="colors">
          {
            list.map((color, index)=>{
              const {hex} = color
              const colorGroup = getColorGroup(index)
              return(
                <SingleColor
                  colorGroup={colorGroup}
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
  background: var(--themeLt);
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
          font-size: 1.1rem;
          color:#b1b2b6;
        }
      }
      .btn-dt{display:block;}
      .btn-mb{display:none;}
      .btn {
        background: var(--solutionsColor);
        border: 1px solid var(--digitalColor);
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        font-size: 1rem;
        color: var(--primaryBlack2);
        cursor: pointer;
        outline-color: var(--primaryColor); 
        padding: 0.5rem 1rem;
        text-transform: capitalize;
        transform: translateX(10px) translateY(0);
      }
      input.error {
        outline-color: red;
        border-color: red;
      }
      .clear-btn{
        background: var(--digitalColor);
        color: var(--primaryWhite);
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
  & > div,
  & > div h1 span.title-l2 {
    margin-bottom: 3rem;
  }
  & > div h1{
  }
  @media (max-width: 576px) {
    & > div h1, & > div h1 span.title-l2 {
      margin-bottom: 0;
      font-size: 1rem;
    }
    & .container{
      form{
        flex-wrap: wrap;
        transform: translateX(0) translateY(-35px);
        input{
          min-width: 75%;
        }
        .btn{
          min-width: 37.5%;
          transform: translateX(0) translateY(10px);
          margin: 2px auto;
        }
        .btn-dt{display:none;}
        .btn-mb{display:block;}
      }
    }
    & .colors {
      grid-template-columns: repeat(auto-fit, minmax(123.33px, 1fr));
      grid-template-columns: repeat(auto-fit, minmax(123.33px, 1fr));
      grid-template-rows: repeat(auto-fit, minmax(41px, 1fr));
    }
  }
`

export default ColorGeneratorPage
