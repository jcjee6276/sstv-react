const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/user','/fan','/Community','/community', '/purchase', '/ticket' , '/product'],
    createProxyMiddleware({
      target: 'http://175.106.99.61:8080',
      changeOrigin: true,
    })
  );

  

  app.use(
    '/donation',
    createProxyMiddleware({
      target: 'http://175.45.200.17:3001',
      changeOrigin: true,
    })
  );
};