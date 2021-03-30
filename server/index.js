const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const outbound = require('./outbound');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/APOD', (req, res) => {
  console.log('someone is in get for apod')
  outbound.fetchAPOD()
    .then((results) => {
      console.log(results.data);
      res.status(200).send(results.data);
    })
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});