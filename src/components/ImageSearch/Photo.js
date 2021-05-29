/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'
import styled from 'styled-components'
import {UseUnsplashContext} from '../../context/unsplash'

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
          <Arrow cls="download-img-arrow"/>
        </a>
      </div>
      <div className="photo-info">
      <div>
        <p>Photo on<a className="unsplash" href="https://unsplash.com" target="_blank">usplash.com</a>by</p>
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
          <Arrow cls="download-img"/>
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
      color: var(--primaryWhite);
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
    fill: var(--primaryWhite);
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
      fill: var(--primaryWhite);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      transition: color ease .5s; 
    }
  }
  &:hover .mobile-download-info{
    .download-img-arrow{
      fill: transparent;
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

export const Arrow = ({cls}) => (<svg width="32" height="32" className={cls} version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>)
