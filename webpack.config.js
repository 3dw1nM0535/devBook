// ES6 code transpiler to ES5 for development

var path = require('path');
var webpack = require('webpack');
let debug = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: debug ? 'inline-sourcemap' : '',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname + '/client/src/index')
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
        // JS
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: path.join(__dirname + '/client/src')
      },
      // CSS
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname + '/client/src')
      }
    ]
  }
};
