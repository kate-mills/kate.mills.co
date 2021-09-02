/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'
import styled from 'styled-components'
import {UseUnsplashContext} from '../../context/unsplash'
import {HiDownload} from 'react-icons/hi'

const Photo = ({photo}) =>{
  const {trackDownload} = UseUnsplashContext()
  const {
    urls:{regular},
    links,
    user:{
      name,
      username,
    }} = photo

  let unsplashUrl = `https://unsplash.com/@${username}?utm_source=ally-digital-solutions&utm_medium=referral`

  return(
    <PhotoWrapper className="photo">
      <img alt={photo.alt_description} src={regular}/>
      <div className="mobile-download-info">
        <a
          onClick={()=>trackDownload(photo)}
          rel="nofollow"
          download=""
          target=""
          data-test="non-sponsored-photo-download-button"
          title="Download photo"
          href={`${links.download}?force=true`}
        >
          <HiDownload className="download-img-arrow"/>
        </a>
      </div>
      <div className="photo-info">
      <div>
        <p>Photo on<a className="unsplash" href="https://unsplash.com" target="_blank">unsplash.com</a>by</p>
        <p><a href={unsplashUrl} target="_blank">{name}</a></p>
      </div>
        <a
          onClick={()=>trackDownload(photo)}
          rel="nofollow"
          data-download="non-sponsored-photo-download-button"
          download=""
          target=""
          title="Download photo"
          href={`${links.download}?force=true`}
        >
          <HiDownload className="download-img"/>
        </a>
      </div>
    </PhotoWrapper>
  )
}

const PhotoWrapper = styled.article`
  &{
    height: 17.5rem;
    position: relative;
    overflow: hidden;
  }
  & > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  & p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    a{
      color: var(--clr-primary-light);
    }
    .unsplash{
      margin-left: 5px;
      margin-right: 5px;
      padding-left: 0;
      padding-right: 0;
      text-transform: lowercase;
    }
  }
  & p {
    margin-bottom: 0;
  }
  .download-img {
    fill: var(--clr-primary-light);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .mobile-download-info{
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    .download-img-arrow{
      position: relative;
      left: 90%;
      fill: var(--clr-primary-light);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      transition: color ease .5s; 
    }
  }
  &:hover .mobile-download-info{
    .download-img-arrow{
    }
  }
  .photo-info {
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    transform: translateY(100%);
    transition: var(--mainTransition);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover .photo-info {
    transform: translateY(0);
  }
  @media(min-width: 1025px){
    .mobile-download-info{
      .download-img-arrow{
        display:none;
      }
    }
  }

`
export default Photo
