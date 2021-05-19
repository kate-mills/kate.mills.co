import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import DisplayImages from '../components/ImageSearch/DisplayImages'

import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

export const mainUrl = `https://api.unsplash.com/photos/`
export const searchUrl = `https://api.unsplash.com/search/photos`
export const clientId = `?client_id=${process.env.GATSBY_UNSPLASH_ACCESS_KEY}`
export const urlPage = `&page=1`

const ImageSearchPage = ()=>{
  const [loading, setLoading] = React.useState(false)
  const [photos, setPhotos] = React.useState([])
  const [query, setQuery] = React.useState('spa')

  const fetchImages = async ()=>{
    setLoading(true)
    let url;
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientId}${urlQuery}`
    } else {
      url = `${mainUrl}${clientId}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      if(data.results){
        setPhotos(data.results)
      } else{
        setPhotos(data)
      }
      setLoading(false)
    } catch(err){
      setLoading(false)
      console.log(err)
    }
  }
  React.useEffect(()=>{
    fetchImages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetchImages()
  }
  return(
    <Layout>
    <SEO title="Search Free Spa Images" description="Set yourself apart with a custom website built by a local Napa Valley web designer specializing in beauty website design and social media for estheticians, beauticians, salons, spas & beauty companies."/>

      <ImageSearchWrapper>

        <form className="search-form">
          <input
            type='text'
            placeholder='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='form-input'
          />
          <button className="submit-btn" type="submit" aria-label="search"
            onClick={handleSubmit}
          ><FaSearch/></button>
        </form>
        <DisplayImages loading={loading} photos={photos}/>
      </ImageSearchWrapper>
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

`

export default ImageSearchPage
