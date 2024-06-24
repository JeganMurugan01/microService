const express = require('express');

const app = express();
const port = 3002;

app.use(express.json());

app.get('/api/login', (req, res) => {
  res.status(200).send({ data: 'Login page' });
});

app.get('/', (req, res) => {
  res.status(200).send({ data: 'Login service is running' });
});

app.use('*', (req, res) => {
  res.status(404).send({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Login service running on port: http://localhost:${port}`);
});
