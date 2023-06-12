const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/user','/fan','/Community','/community', '/purchase', '/ticket' , '/product'],
    createProxyMiddleware({
      target: 'http://223.130.135.131:8080',
      changeOrigin: true,
    })
  );

  

  app.use(
    ['/donation', '/streaming'],
    createProxyMiddleware({
      target: 'http://175.106.99.61:3001',
      changeOrigin: true,
    })
  );
};