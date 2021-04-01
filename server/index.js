const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const outbound = require('./outbound');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/APOD', (req, res) => {
  // console.log('someone is in get for apod')
  // console.log(req.query)
  let response = {};
  outbound.fetchAPOD(req.query)
    .then((results) => {
      // console.log(results.data);
      response.apod = results.data;
      // res.status(200).send(results.data);
      // outbound.fetchNEO(req.query)
      //   .then( (results2) => {
      //     response.numberOfNeos = results2.data.element_count;
      //     response.nearEarthObjects = results2.data.near_earth_objects[req.query.date];
      //     //actually, sort through here to take load off of client
      //     // console.log (results2.data)
      //     // console.log(response)
      //     res.status(200).send(response);
      //   })
      //   .catch((error) => {
      //     console.log('error out of fetching NEO')
      //   })
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
});

app.get('/NEO', (req, res) => {
  let response = {};
  outbound.fetchNEO(req.query)
    .then( (results) => {
      response.numberOfNeos = results.data.element_count;
      response.nearEarthObjects = results.data.near_earth_objects[req.query.date];
      //actually, sort through here to take load off of client
      // console.log (results2.data)
      // console.log(response)
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send(error);
    })
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});