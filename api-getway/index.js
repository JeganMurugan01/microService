const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.MAIN_SERVER_PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ data: 'server is online' });
});

app.use(
  '/userService',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  })
);

app.use(
  '/loginService',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
  })
);

app.listen(port, () => {
  console.log(`API Gateway is running on http://localhost:${port}`);
});
