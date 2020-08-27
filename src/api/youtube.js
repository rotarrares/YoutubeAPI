import axios from 'axios';

const KEY = 'AIzaSyDotWhU0yDpJKrZim76k9jQlqTVouduoGg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults:5,
    key:`${KEY}`
  }
});
