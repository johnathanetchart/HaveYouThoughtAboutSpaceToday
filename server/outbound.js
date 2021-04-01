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
  return axios.get('https://api.nasa.gov/planetary/apod', options)
}

const fetchNEO = (query) => {
  //set default to today
  if (query.date === undefined) {
    let today = new Date();
    let yyyy = String(today.getFullYear());
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    query.date = yyyy + '-' + mm + '-' + dd;
  }
  // console.log(query.date)
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
