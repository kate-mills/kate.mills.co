import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import styled from 'styled-components'
import SingleColor from '../components/ColorGenerator/SingleColor'
import Values from 'values.js'
import { getUniqueColors, listOfColors } from '../utils/helpers'
import { getReadableColorFromHex } from '../context/state-colorgen/helpers'

const ColorGeneratorPage = () => {
  const [color, setColor] = React.useState('')
  const [error, setError] = React.useState(false)
  const [list, setList] = React.useState([])
  const [placeValue, setPlaceValue] = React.useState('grey')
  const focusMethod = () => {
    document.getElementById('hex-input').focus()
  }
  const getValues = clr => {
    return new Values(clr).all(5)
  }
  const setSlicedColors = clrs => {
    setList(clrs.slice(0))
  }

  const iterPlaceVal = () => {
    let cIdx = listOfColors.indexOf(placeValue)
    setPlaceValue(
      cIdx <= listOfColors.length - 2 ? listOfColors[cIdx + 1] : listOfColors[0]
    )
  }

  const clearForm = () => {
    setError(false)
    setColor('')
    iterPlaceVal()
  }

  React.useEffect(() => {
    let colors = getValues('grey')
    let uniqueColors = getUniqueColors(colors)
    setSlicedColors(uniqueColors)
    focusMethod()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (color) {
      let isHex = color[0] === '#'
      let clr = isHex ? color : color.toLowerCase()
      try {
        let colors = getValues(clr)
        let uniqueColors = getUniqueColors(colors)
        setError(false)
        setSlicedColors(uniqueColors)
      } catch (error) {
        try {
          let colors = getValues('#'.concat(color))
          let uniqueColors = getUniqueColors(colors)
          setError(false)
          setSlicedColors(uniqueColors)
        } catch (err) {
          setError(true)
        }
      }
    }
    focusMethod()
  }

  const handleHexInputChange = e => {
    setColor(e.target.value.trim())
  }

  return (
    <Layout>
      <FullSeo
        image="/images/app-tints-and-shades.jpg"
        title="Forty Tints & Shades"
        description="Monochromatic Colors Generator. Get 20 hues and 20 shades by entering a valid CSS color name, RGB, or hex value."
      />
      <ColoredGeneratorWrapper>
        <Banner title="Forty Tints & Shades">
          <h6 className="banner-text">Monochromatic Colors Generator</h6>
          Get 20 hues and 20 shades by entering a valid CSS color name, RGB, or
          hex value.
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
            <button tabIndex="0" className="btn btn-dt" type="submit">
              submit
            </button>
            <button
              tabIndex="0"
              className="btn clear-btn"
              id="clear"
              onClick={clearForm}
            >
              clear
            </button>
            <button tabIndex="0" className="btn btn-mb" type="submit">
              submit
            </button>
          </form>
        </section>
        <section className="colors">
          {list.map((color, index) => {
            const { hex } = color
            return (
              <SingleColor
                key={index}
                index={index}
                hex={hex}
                textColor={getReadableColorFromHex(hex)}
                {...color}
              />
            )
          })}
        </section>
      </ColoredGeneratorWrapper>
    </Layout>
  )
}

const ColoredGeneratorWrapper = styled.div`
  background: var(--bg-light);
  .child-div {
    margin-top: -1rem;

    h6.banner-text {
      font-size: 2rem;
    }
  }
  & .container {
    margin: 0 auto;
    text-align: center;
    padding: 0 0 1rem;
    form {
      button{
        outline-color:var(--clr-secondary-light) !important;
      }
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
        border: none;
        border-bottom: 4px solid var(--black);
        border-color: var(--black);
        letter-spacing: var(--midSpacing);
        padding: 0.5rem 2rem 0.5rem 1rem;
        font-size: 1rem;
        ::placeholder {
          width: fit-content;
          font-size: 1.1rem;
          color: var(--clr-secondary-light); /*hsl(232deg 41% 25% / 57%);*/
        }
      }
      .btn-dt {
        display: block;
      }
      .btn-mb {
        display: none;
      }
      .btn {
        background: var(--clr-secondary-light);
        border: 1px solid var(--clr-secondary-color);
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        color: var(--clr-secondary-light-color);
        cursor: pointer;
        font-size: 1rem;
        outline-color: var(--clr-secondary-color-light);
        padding: 0.5rem 1rem;
        text-transform: capitalize;
        transform: translateX(10px) translateY(0);
      }
      input.error {
        outline-color: red;
        border-color: red;
      }
      .clear-btn {
        background: var(--clr-secondary-dark);
        color: var(--clr-secondary-dark-txt);
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
  & > div h1 {
  }
  @media (max-width: 576px) {
    & > div h1,
    & > div h1 span.title-l2 {
      margin-bottom: 0;
      font-size: 1rem;
    }
    & .container {
      form {
        flex-wrap: wrap;
        transform: translateX(0) translateY(-35px);
        input {
          min-width: 75%;
        }
        .btn {
          min-width: 37.5%;
          transform: translateX(0) translateY(10px);
          margin: 2px auto;
        }
        .btn-dt {
          display: none;
        }
        .btn-mb {
          display: block;
        }
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
