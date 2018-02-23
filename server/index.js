// Server configurations
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import https from "https";
import fs from "fs";

// Webpack assets configurations/Middleware
import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../webpack.config";

// Routes
import auth from "./routes/auth";
import users from "./routes/users";


// Module import
import privateKeys from "../config/private_keys";

config.plugins.push(new webpack.HotModuleReplacementPlugin());

// Connect to database
mongoose.connect(privateKeys.MONGO_URI);

// Certificate options
const certOptions = {
  pfx: fs.readFileSync(path.resolve("config/localhost.pfx")),
  passphrase: "#03167@TuK2019",
};


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
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  host: "localhost",
}));

// Parse application-json data
app.use(bodyParser.json());

// Route mounting
app.use("/api/auth", users);
app.use("/api/auth/users", auth);

// Any Route handler
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Init server
const server = https.createServer(certOptions, app);

// Start server on defined port
server.listen(port);
