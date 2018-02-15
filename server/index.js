// Server configurations

import path from "path";
import express from "express";

// Webpack assets configurations/Middleware

import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../webpack.config";

// Module import
import privateKeys from "../config/private_keys";

config.plugins.push(new webpack.HotModuleReplacementPlugin());


// Init express module

const app = express();

// Config port

const port = privateKeys.PORT;

// Wrap webpack configurations to webpack

const compiler = webpack(config);

// Webpack hot reloading Middleware

app.use(webpackHotMiddleware(compiler));

// Webpack bundler Middleware

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
  host: "localhost",
}));

// Any Route handler

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server on port defined

app.listen(port, () => {
  console.log(`
    ####################
    #  Server Running  #
    ####################
  `);
});
