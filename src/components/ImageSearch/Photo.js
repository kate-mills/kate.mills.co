/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'

import {HiDownload} from 'react-icons/hi'
import styled from 'styled-components'

const Photo = ({photo}) =>{
  const {
    urls,
    links,
    user:{
      name,
      username,
    }} = photo
  const {regular} = urls

  let downloadLocation = links.download_location.slice(12)
  let unsplashUrl = `https://unsplash.com/@${username}?utm_source=ally-digital-solutions&utm_medium=referral`

  return(
    <PhotoWrapper className="photo">
      <img alt={photo.alt_description} src={regular}/>
      <div className="download-info">
        <a
          rel="nofollow"
          download=""
          target="_blank"
          data-test="non-sponsored-photo-download-button"
          title="Download photo"
          download_location={links.download_location}
          href={`${downloadLocation}/?force=true`}
        >
        <HiDownload className="download-img-arrow"/>
        </a>
      </div>
      <div className="photo-info">
      <div>
        <p>Photo on<a className="unsplash" href="https://unsplash.com" target="_blank">usplash.com</a>by</p>
        <p><a href={unsplashUrl} target="_blank">{name}</a></p>
      </div>
        <a
          rel="nofollow"
          download=""
          target="_blank"
          data-test="non-sponsored-photo-download-button"
          title="Download photo"
          download_location={links.download_location}
          href={`${downloadLocation}/?force=true`}
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
    color: var(--primaryWhite);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  .download-info{
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    .download-img-arrow{
      position: relative;
      left: 90%;
      color: var(--primaryWhite);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      transition: color ease 1s; 
    }
  }
  &:hover .download-info{
    .download-img-arrow{
      color: transparent;
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

`
export default Photo
