/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'

import {HiDownload} from 'react-icons/hi'
import styled from 'styled-components'

const Photo = ({photo}) =>{
  const {urls, likes,
    links:{ download, },
    user:{
    name,
  }} = photo
  const {regular} = urls


  return(
    <PhotoWrapper className="photo">
      <img alt={photo.alt_description} src={regular}/>
      <div className="photo-info">
      <div>
        <h4>{name}</h4>
        <p>{likes} likes</p>
      </div>
        <a rel="nofollow" download="" target="_blank" data-test="non-sponsored-photo-download-button" title="Download photo"
          href={`${download}/?force=true`}>
          <HiDownload className="user-img"/>
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
  & h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  & p {
    margin-bottom: 0;
  }
  .user-img {
    color: var(--primaryLight);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
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
    transition: var(--transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover .photo-info {
    transform: translateY(0);
  }

`
export default Photo
