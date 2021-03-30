const axios = require('axios');
require('dotenv').config();

const nasaKey = 'api_key=' + process.env.nasa_api_key;
const options = {
  params: {
    api_key: process.env.nasa_api_key
  }
}

const fetchAPOD = () => {
  return axios.get('https://api.nasa.gov/planetary/apod', options)
}

module.exports = {
  fetchAPOD
};
