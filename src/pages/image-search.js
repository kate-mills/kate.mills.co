import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import DisplayImages from '../components/ImageSearch/DisplayImages'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'

import {graphql} from 'gatsby'

export const clientId = `?client_id=${process.env.GATSBY_UNSPLASH_ACCESS_KEY}`
export const mainUrl = `https://api.unsplash.com/photos/`
export const searchUrl = `https://api.unsplash.com/search/photos`

const ImageSearchPage = ({data:seoData})=>{
  const [loading, setLoading] = React.useState(false)
  const [photos, setPhotos] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [query, setQuery] = React.useState('')

  const fetchImages = async ()=>{
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    const initQuery = `&query=beauty`
    if (query) {
      url = `${searchUrl}${clientId}${urlQuery}${urlPage}`
    } else {
      url = `${searchUrl}${clientId}${initQuery}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos)=>{
        let tempPhotos = []
        if(page>1){
          tempPhotos = [...oldPhotos, ...data.results]
          console.log(tempPhotos.length)
          return tempPhotos
        } else{
          tempPhotos = data.results
          console.log(tempPhotos.length)
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
      <FullSeo title="Free Beauty Salon & Spa Images For Your Website" description="Search and download unlimited Beauty Images for your website or social media post."
     image={seoData.defaultBg.childImageSharp.fluid.src} />
      <HeroShort>
      <Banner title="Unlimited Free Beauty Images" info="for your next digital project">
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
        <DisplayImages loading={loading} photos={photos} query={query}/>
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

export const query = graphql`
  query{
    defaultBg: file(relativePath: { eq: "image-search.png" }) {
      childImageSharp {
      fluid(quality: 100, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default ImageSearchPage

