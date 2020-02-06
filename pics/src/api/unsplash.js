import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID d0d024cc69d5f503ec1b29505db847826fa0878f7cab3533089a5dd586852154'
  }
});