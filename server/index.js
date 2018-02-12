// Server configurations
import path from "path";
import express from "express";
import webpack from "webpack";
import dotenv from "dotenv";
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

// Webpack bundler Middleware
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
}));

// Webpack hot reloading Middleware
app.use(require("webpack-hot-middleware")(compiler));

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
