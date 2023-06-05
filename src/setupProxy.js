const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/user','/fan','/Community','/community'],
    createProxyMiddleware({
      target: 'http://192.168.0.15:8080',
      changeOrigin: true,
    })
  );

  

  app.use(
    '/donation',
    createProxyMiddleware({
      target: 'http://192.168.0.15:3001',
      changeOrigin: true,
    })
  );
};