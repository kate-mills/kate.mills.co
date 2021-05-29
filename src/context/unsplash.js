import React, {useContext } from 'react';
import axios from 'axios'

import nodeFetch from 'node-fetch'
import {createApi} from 'unsplash-js'


const UnsplashContext = React.createContext();

const unsplash = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch,
});

const fetchApiAndRecordDownload = async (id)=>{
  try{
    const response = await axios.get(`/.netlify/functions/track-unsplash?id=${id}`)
    console.log('success ', response)
    window.response = response
    return window.response
  } catch(error){
    console.log(error)
  }
}


const UnsplashProvider = ({children}) => {

  const trackDownload  = async (photo)=>{
    const confirmation = await fetchApiAndRecordDownload(photo.id) 
    console.log('confirmation', confirmation)
  }

  return(
    <UnsplashContext.Provider
      value={{
        trackDownload,
        unsplash,
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};
// make sure use
export const UseUnsplashContext = () => {
  return useContext(UnsplashContext);
};

export { UnsplashContext, UnsplashProvider };
