const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log(`app listening on port:${port}`);
});

module.export = app;
