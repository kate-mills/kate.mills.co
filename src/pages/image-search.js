import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import DisplayImages from '../components/ImageSearch/DisplayImages'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'

export const clientId = `?client_id=${process.env.GATSBY_UNSPLASH_ACCESS_KEY}`
export const mainUrl = `https://api.unsplash.com/photos/`
export const searchUrl = `https://api.unsplash.com/search/photos`

const ImageSearchPage = ()=>{
  const [loading, setLoading] = React.useState(false)
  const [photos, setPhotos] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [query, setQuery] = React.useState('')

  const fetchImages = async ()=>{
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    const initQuery = `&query=spa`
    if (query) {
      url = `${searchUrl}${clientId}${urlQuery}${urlPage}`
    } else {
      url = `${searchUrl}${clientId}${initQuery}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos)=>{
        let tempPhotos
        if(page>1){
          tempPhotos = [...oldPhotos, ...data.results]
          return tempPhotos
        } else{
          tempPhotos = data.results
          return tempPhotos
        }
      })
      setLoading(false)
    } catch(err){
      console.log(err)
      setLoading(false)
    }
  }
  React.useEffect(()=>{
    fetchImages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  React.useEffect(()=>{
    const el = document.getElementsByTagName('input')[0] // input[0] is search
    el.focus()
  }, [])

  React.useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      const footerHeight = 107
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - footerHeight
      ) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setPage((oldPage)=>1)
    fetchImages()
  }
  return(
    <Layout>
    <SEO title="Search Free Spa Images" description="Set yourself apart with a custom website built by a local Napa Valley web designer specializing in beauty website design and social media for estheticians, beauticians, salons, spas & beauty companies."/>

      <HeroShort>
      <Banner title="Search for Free Beauty Images" info="for your website">

      </Banner>
      </HeroShort>
      <ImageSearchWrapper>
        <form className="search-form">
          <input
            tabIndex={0}
            type='text'
            placeholder='search images'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='form-input'
          />
          <button className="submit-btn" type="submit" aria-label="search"
            onClick={handleSubmit}
          ><FaSearch/></button>
        </form>
      </ImageSearchWrapper>

        <DisplayImages loading={loading} photos={photos}/>
    </Layout>
  )
}

const ImageSearchWrapper = styled.section`
  &{
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 5rem 0 0 0;
    width: 90vw;
  }
  .search-form {
    display: flex;
  }
  .form-input {
    width: 100%;
    outline-color: var(--solutionsColor);
    outline: none;
  }
  .form-input,
  .submit-btn {
    background: transparent;
    border: none;
    border-bottom: 3px solid var(--digitalColor);
    color: var(--digitalColor);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    outline-color: var(--solutionsColor);
    padding: 0.75rem 1.25rem;
    text-transform: capitalize;
  }
  .form-input::placeholder {
    color: var(--digitalColor2);
  }
  .submit-btn {
    border-bottom: none;
  }
  .submit-btn:hover{
    cursor: pointer;
  }
`
export default ImageSearchPage
