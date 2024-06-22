const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://192.168.0.12",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request:", req.method, req.url);
      },
      onError: (err, req, res) => {
        console.error("Proxy error:", err);
      },
    })
  );
};
