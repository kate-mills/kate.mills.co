import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import HeroShort from '../components/Hero/Short'
import Banner from '../components/Hero/Banner'
import styled from 'styled-components'

import SingleColor from '../components/ColorGenerator/SingleColor'
import Values from 'values.js'


const ColorGeneratorPage = ()=> {
  const [color,setColor] = React.useState('');
  const [error,setError] = React.useState(false);
  const [bgClr,setBgClr] = React.useState('')
  const [list, setList ] = React.useState([]);

  const focusMethod = () =>{
    document.getElementById('hex-input').focus()
  }

  React.useEffect(()=>{
    let colors = new Values('#ffe9dd').all(5)
    setList(colors)
    focusMethod()
  }, [])


  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(5)
      setError(false)
      setList(colors)
    }catch(error){
      try{
        let colors = new Values('#'.concat(color)).all(5)
        setError(false)
        setList(colors)
      }catch(err){
        setError(true)
      }
    }
    focusMethod()
  }

  const handleHexInputChange = (e) =>{
    let clr = e.target.value.toLowerCase()
    setColor(clr)
    setBgClr(clr)
  }
  return(
    <Layout>
      <FullSeo title="Color Generator"/>
      <HeroShort>
        <Banner
          title="Gorgeous Colors"
          info="Get tints & shades of any color & build a gorgeous coloscheme."
        />
      </HeroShort>
        <SectionWrapper className="section">
            <h2>Enter a color or hexadecimal value</h2>
            <p>A hexadecimal color is specified with: #RRGGBB.</p>
            <p>RR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF specifying the intensity of the color.</p>
            <p>For example, #FF0000 is displayed as red, because the red component is set to its highest value (FF) and the others are set to 00.</p>
        </SectionWrapper>
      <ColoredGeneratorWrapper>
        <section className="container">
          <form onSubmit={handleSubmit} className="form">
            <input
              id="hex-input"
              type="text"
              value={color}
              placeholder={`#ffe9dd`}
              onChange={handleHexInputChange}
              className={`${error ? 'error' : null}`}
              tabindex="0"
              style={{
                outlineColor: `${bgClr}`,
              }}
            />
            <button tabindex="0" className="btn" type="submit"
              style={{ outlineColor: `${bgClr}`, }}
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


const SectionWrapper = styled.div`
  &{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: .4rem;
    margin: auto;
    text-align: center;
    h2{
      font-size: 2rem;
      max-width: 80vw;
      width: 100%;
    }
    p{
      color: var(--primaryBlack);
      letter-spacing:var(--altSpacing);
      max-width: 80vw;
      width: 100%;
    }
  }

`
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
    letter-spacing: var(--midSpacing);
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
