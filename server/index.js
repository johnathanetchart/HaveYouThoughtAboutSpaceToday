const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});