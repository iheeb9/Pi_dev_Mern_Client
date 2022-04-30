const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {

app.use(
    '/api',
     createProxyMiddleware({
       target: 'https://emark-detection-emotion-server.herokuapp.com',
       changeOrigin: true,
     })
  );
  app.use(
     '/python',
     createProxyMiddleware({
       target: 'http://localhost:4000',
      changeOrigin: true,
     })
  );
}
