// domain/.netlify/functions/hello

require('dotenv').config()

const URL = require('url').URL;
global.URL = URL

// Explicitly provide fetch as an argument to createApi
const  nodeFetch = require('node-fetch');
const {createApi} = require('unsplash-js');

const unsplash = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch,
});

const doTracking = async (dl) =>{
  const downloadTest = new URL(`https://api.unsplash.com/photos/${dl}/download?ixid=MnwyMzIwMzh8MHwxfGFsbHx8fHx8fHx8fDE2MjIyMzA0MDE`)
  const response = await unsplash.photos.trackDownload({downloadLocation:downloadTest})
  console.log('response', response)
  return response
}

exports.handler = async(e, context, cb) =>{
  const {id} = e.queryStringParameters
  if(id){

    const {type, status:statusCode, response:{url:response}} = await doTracking(id)

    return {
      statusCode,
      type,
      body: JSON.stringify({response,statusCode,type}),
    }
  } else{
    return{
      statusCode:500,
      body: 'Image id is required'
    }
  }
}
