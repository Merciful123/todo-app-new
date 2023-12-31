// const { createProxyMiddleware } = require("http-proxy-middleware");

import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  // Proxy all requests to http://merciful.wuaze.com
  app.use(
    createProxyMiddleware("/books", {
      target: "https://merciful.wuaze.com",
      changeOrigin: true,
    })
  );

  // Add additional proxy setups for other endpoints if needed
};
