const express = require('express');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ data: 'User server is online' });
});

app.listen(port, () => {
  console.log(`User server running on port: http://localhost:${port}`);
});
