const express = require('express')
const Router = express.Router()
const https = require('https');
const fetch = require('node-fetch')
const dotenv = require('dotenv').config()
const Unsplash = require('unsplash-js').default
const toJson = require('unsplash-js').toJson;
global.fetch = fetch;

// const unsplash = createApi({
//     accessKey: process.env.ACCESS_KEY,
//     fetch: fetch,
//   });

  const unsplash = new Unsplash({
    accessKey:process.env.ACCESS_KEY
    // Optionally you can also configure a custom header to be sent with every request
    // headers: {
    //   "X-Custom-Header": "foo"
    // },
    // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
   // timeout: 500 // values set in ms
  });
  

Router.get('/search/:key', async(req, res) => {
  console.log(req.body)
try {
  unsplash.search.photos(req.params.key, 1, 40, )
  .then(toJson)
  .then(json => {
    res.send(json.results)
  });

} catch (error) {
  res.status(400)
}

 
})

module.exports = Router