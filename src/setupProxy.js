//const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api', 
        { target: "https://secret-chin-production.up.railway.app",
        "secure":true,
        "headers": {
            "host": "secret-chin-production.up.railway.app"
           },
           "changeOrigin": true,
        "cookieDomainRewrite": "" }
        
    ));
}