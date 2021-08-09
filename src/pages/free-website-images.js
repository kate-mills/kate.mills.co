/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import DisplayImages from '../components/ImageSearch/DisplayImages'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import Banner from '../components/Hero/Banner'

import {graphql} from 'gatsby'

import {UseUnsplashContext} from '../context/unsplash'

const ImageSearchPage = ({data:seoData})=>{
  const {unsplash} = UseUnsplashContext()
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [query, setQuery] = React.useState('')
  const [photos, setPhotos] = React.useState([])

  const focusInput = ()=>{
    const el = document.getElementsByTagName('input')[0] // input[0] is search
    el.focus()
    return
  }
  const fetchImages = async ()=>{
    let searchQ = query || 'beauty'
    if(searchQ && page<=50){
      setLoading(true)
      unsplash.search
        .getPhotos({
          page,
          query:searchQ,
        })
        .then(result =>{
          setPhotos((oldPhotos)=>{
            let tempPhotos = []
            if(page>1){
              let newPhotos = result.response.results.reverse()

              tempPhotos = [...oldPhotos, ...newPhotos]
              console.log(`fetch-${tempPhotos.length}`)
              return tempPhotos
            } else{
              tempPhotos = result.response.results.reverse()
              console.log(`fetch-${tempPhotos.length}`)
              return tempPhotos
            }
          })
          focusInput()
          setLoading(false)
        })
        .catch((err)=>{
          console.log(err)
          focusInput()
          setLoading(false)
        })
    }
  }
  React.useEffect(()=>{
    fetchImages()
  }, [page])

  React.useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      const footerHeight =291
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - footerHeight
      ) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return()=>window.removeEventListener('scroll', event)
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setPage((oldPage)=>1)
    fetchImages()
  }
  return(
    <Layout>
      <FullSeo
        image="/images/free-website-images.jpg"
        title="Search Unlimited Beauty Images For Your Website"
        description="Search and download unlimited Beauty Images for your website or social media post."
      />
      <Banner title="Search Images & Unlimited Downloads"/>
      <ImageSearchWrapper>
        <h2 className="h2-sm">Explore high quality images with unlimited free downloads for your next website or social media post.</h2>
        <form className="search-form">
          <input
            tabIndex={0}
            type='text'
            placeholder='search images'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
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
    padding: 0 0 0;
    width: 90vw;
    h2{
      max-width: var(--max-width);
      font-size: 1.5rem;
      letter-spacing: var(--altSpacing);
      margin: 0 auto 3rem;
      padding: 0 0 0;
    }
  }
  .search-form {
    display: flex;
  }
  .form-input {
    width: 100%;
    outline: none;
  }
  .form-input,
  .submit-btn {
    background: transparent;
    border: none;
    border-bottom: 3px solid var(--digitalColor);
    color: var(--digitalColor);
    font-size: 1.5rem;
    letter-spacing: var(--altSpacing);
    outline-color: var(--primaryColor);
    padding: 0.75rem 1.25rem;
    text-transform: capitalize;
  }
  .form-input::placeholder {
    color: var(--primaryBlack);
    font-style: italic;
    opacity: .5;
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
