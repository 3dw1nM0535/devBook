// ES6 code transpiler to ES5 for development

var path = require('path');
var webpack = require('webpack');
let debug = process.env.NODE_ENV !== 'production';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : '',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname + '/client/src/index.js')
  ],
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins : debug ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, compressor: { warnings: false } }) // Clean code without docBlocks
  ],
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        // JS
        test: /\.js$/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/,
        include: path.join(__dirname + '/client/src')
      },
      // CSS
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            }
          ],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
