const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const https = require('https');
const fs = require('fs');
const next = require("next");
const nextCookie = require("next-cookies");
const env = process.env.NODE_ENV;
const port = process.env.PORT || 3000;
const devMode = env !== "production";
var path = require("path");

const app = next({
  dev: devMode,
});
console.log(process.env.API_BASE_URI);
const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    const devProxy = {
      "/laravel-secure/*": createProxyMiddleware({
        target: process.env.API_BASE_URI,
        pathRewrite: (path, req) => path.replace("/laravel-secure", ""),
        changeOrigin: true,
        onProxyReq: (proxyReq, req, res) => {
          const cookie = nextCookie({ req });
          const { token } = cookie;
          proxyReq.setHeader("Authorization", `Bearer ${token}`);
        },
      }),
      "/laravel/*": createProxyMiddleware({
        target: process.env.API_BASE_URI,
        pathRewrite: (path, req) => path.replace("/laravel", ""),
        changeOrigin: true,
      }),
    };

    // Set up the proxy.
    for (let context in devProxy) server.use(context, devProxy[context]);
    server.use(
      "/staticfiles",
      express.static(path.join(__dirname + "/static"))
    );

    // Default catch-all handler to allow Next.js to handle all other routes
    //server.all("*", handle);
    server.all("*", checkPath, handle);

    function checkPath(req, res, next) {
      if (req.path == "/")
        return res.sendFile(path.join(__dirname + "/static/index.html"));

      next();
    }
    server.listen(port, (error) => {
      if (error) throw error;
      console.log(`> Ready on port ${port} [${env}]`);
    });0
	// not required below code because we are proxying using vhost file.
	/*if (devMode) {
		server.listen(port, (err) => {
		  if (err) throw err;
		  console.log(`> Ready on port ${port} [${env}]`)
		});
	  } else {		
		const key = fs.readFileSync('/etc/letsencrypt/live/bpmn4.com/privkey.pem');
		const cert = fs.readFileSync('/etc/letsencrypt/live/bpmn4.com/fullchain.pem')
		https.createServer({
		  key,
		  cert,
		}, server).listen(port, (err) => {
		  if (err) throw err;
		  console.log(`> Ready on port ${port} [${env}]`)
		});
	  }*/
  })
  .catch((error) => {
    console.log("An error occurred, unable to start the server");
    console.log(error);
  });
