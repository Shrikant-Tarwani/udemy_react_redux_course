import axios from 'axios';

const KEY = "AIzaSyB08kaRP1IdKDpmZmdC16j0AB2OaCzV9gw"

export default axios.create({
    baseURL: 'http://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})