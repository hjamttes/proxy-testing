const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const proxy = createProxyMiddleware({
  target: 'https://shellshock.io', // the target URL
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove base path
  },
  onProxyReq: (proxyReq, req, res) => {
    // Remove the '/api' prefix from the path
    proxyReq.path = proxyReq.path.replace(/^\/api/, '');
  },
});

app.use('/api', proxy);

module.exports = app;
