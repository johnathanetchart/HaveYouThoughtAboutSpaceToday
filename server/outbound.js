const axios = require('axios');
require('dotenv').config();

const nasaKey = process.env.nasa_api_key;

const fetchAPOD = (query) => {
  let options = {
    params: {
      api_key: nasaKey
    }
  }
  if(query.date) {
    options.params.date = query.date;
  }
  // console.log(options)
  return axios.get('https://api.nasa.gov/planetary/apod', options)
}

const fetchNEO = (query) => {
  let options = {
    params: {
      api_key: nasaKey,
      start_date: query.date,
      end_date: query.date
    }
  }
  return axios.get('https://api.nasa.gov/neo/rest/v1/feed', options);
}

module.exports = {
  fetchAPOD,
  fetchNEO
};
