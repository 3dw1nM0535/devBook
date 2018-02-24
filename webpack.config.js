// ES6 code transpiler to ES5 for development

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "eval-source-map",
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [
      // Misc
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      // JSX
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader/webpack'],
      },
      {
        // JS
        test: /\.js$/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        include: path.join(__dirname, 'client')
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
  ],
  resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
  },
};
