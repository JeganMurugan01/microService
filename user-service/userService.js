const express = require('express');
const userDate = require('../api-getway/userdata');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ data: userDate });
});

app.listen(port, () => {
  console.log(`User server running on port: http://localhost:${port}`);
});
