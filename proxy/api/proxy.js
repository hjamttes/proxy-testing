const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const proxy = createProxyMiddleware({
  target: 'https://shellshock.io/', // replace with your target URL
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove base path
  },
});

app.use('/api', proxy);

module.exports = app;
