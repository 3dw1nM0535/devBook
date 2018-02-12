// Server configurations
import path from "path";
import express from "express";
import dotenv from "dotenv";

// Webpack assets
import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../webpack.config";

config.plugins.push(new webpack.HotModuleReplacementPlugin());

// Init provate keys
dotenv.config();

// Init express module
const app = express();

// Config port
const port = process.env.PORT || 3000;

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

// All Route handler
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server on port
app.listen(port, () => {
  console.log(`
    ####################
    #  Server Running  #
    ####################
    `);
});
