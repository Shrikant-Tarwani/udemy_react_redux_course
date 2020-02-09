import axios from 'axios';

const KEY = 'AIzaSyB08kaRP1IdKDpmZmdC16j0AB2OaCzV9gw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});