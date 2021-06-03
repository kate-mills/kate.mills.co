/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import styled from 'styled-components'
import RandomColor from '../components/ColorGenerator/RandomColor'
import ColorScheme from 'color-scheme'


const ColorGeneratorPage = ()=> {

  const VAR_LIST = ['soft', 'pastel', 'hard', 'light','pale', 'default']
  const NM_LIST = ['triade', 'analogic', 'contrast', 'tetrade', 'mono']
  const scheme = new ColorScheme()
  const [hueNum, setHueNum] = React.useState(21)
  const [varIdx,setVarIdx] = React.useState(0);
  const [nmIdx,setNmIdx] = React.useState(0);
  const [error,setError] = React.useState(false);
  const [list, setList ] = React.useState([]);
  const focusMethod = () =>{document.getElementById('hex-input').focus()};

  const isVarIdxSetToLastIdx = (varIdx >= (VAR_LIST.length - 1))
  const isNmeIdxSetToLastIdx = (nmIdx >= (NM_LIST.length - 1))

  const increaseVarIdx = () => {
    let newIndex = (isVarIdxSetToLastIdx ? 0:(varIdx+1))
    setVarIdx((prev)=>newIndex)
    return
  }
  const increaseNmIdx = () => {
    // only increase NM_LIST index if at last VAR_LIST index
    if(isVarIdxSetToLastIdx) {
      let newIndex = (isNmeIdxSetToLastIdx ? 0:(nmIdx+1))
      setNmIdx((prev)=>newIndex, console.log(NM_LIST[nmIdx]))
    }
    return
  }

  const increaseIndices = ()=>{
    increaseNmIdx()
    increaseVarIdx()
    return
  }


  const clearForm = () => {
    setNmIdx(0)
    setVarIdx(0)
    setError(false)
  };

  const updateScheme = () => {
    increaseIndices()
    return scheme.from_hue(hueNum)
      .scheme(NM_LIST[nmIdx])
      .variation(VAR_LIST[varIdx])
  };

  React.useEffect(()=>{
    updateScheme()
    setList(scheme.colors())
    focusMethod()
  }, [])

  const updateDistance = ()=>{
    try{
      scheme.distance(0.75)
      setList(scheme.colors())
      console.log('try', list)
    }catch(err){
      console.log('EEEERRRR', err)
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let huePassedTest = Number.isSafeInteger(hueNum)
    if(huePassedTest){
      alert(huePassedTest)
      try {
        updateScheme()
        setList(scheme.colors())
        setError(false)
      }catch(error){
        try{
          scheme.variation('pastel')
          setList(scheme.color())
          setError(false)
        }catch(err){
          setError(true)
        }
      }
    }
    updateDistance()
    focusMethod()
  };

  const handleHueNumChange = (e) =>{
    let temp = Number(e.target.value)
    setHueNum((prev)=> {
      if(Number.isSafeInteger(temp)){
        return temp
      }else{
        return prev
      }
    })
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
          title="Spa Color Schemes"
          info="Build A Gorgeous Color Scheme For Beauty Business"
        >
        </Banner>
        <section className="container">
          <form onSubmit={handleSubmit} className="form">
            <input
              id="hex-input"
              type="text"
              value={hueNum}
              placeholder={`Key words`}
              onChange={handleHueNumChange}
              className={`${error ? 'error' : null}`}
              tabIndex="0"
              autoComplete="off"
            />
            <button tabIndex="0" className="btn btn-dt" type="submit">generate</button>
            <button tabIndex="0" className="btn clear-btn" id="clear" onClick={clearForm}>clear</button>
            <button tabIndex="0" className="btn btn-mb" type="submit">generate</button>
          </form>
        </section>
        <section className="colors">
          {
            list.map((hex, index)=>{
              return(
                <RandomColor key={index} index={index} hex={hex}/>
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
