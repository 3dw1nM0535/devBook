// ES6 code transpiler to ES5 for development
import path from 'path';
import webpack from 'webpack';
let debug = process.env.NODE_ENV !== 'production';

export default {
  context: path.join(__dirname + 'client/src'),
  devtool: debug ? 'inline-sourcemap' : '',
  entry: [
    debug ? 'webpack-hot-middleware/client/src' : '',
    path.join(__dirname + 'client/src/index.js')
  ],
  output: {
    path: path.join(__dirname + 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins : debug ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, compressor: { warnings: false } }) // Clean code without docBlocks
  ],
  module: {
    loaders: [
      {
        // JS
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        include: path.join(__dirname + 'client/src')
      },
      // CSS
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname + 'client/src')
      }
    ]
  }
};
