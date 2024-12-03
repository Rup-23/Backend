// var slugify = require('slugify')

// let a = slugify('some string') // some-string
// console.log(a);
// // if you prefer something other than '-' as separator
// const b = slugify('some string', '_')  // some_string
// console.log(b);


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Hello rahul!');
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});