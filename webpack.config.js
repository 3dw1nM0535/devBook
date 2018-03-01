// ES6 code transpiler to ES5 for development

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "eval-source-map",
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
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
      { test: /\.(woff2?|svg|jpe?g|png|gif|ico|eot|ttf)$/, loader: 'url-loader?limit=10000' },
      {
        // JS
        test: /\.js$/,
        loaders: ["react-hot-loader/webpack", "babel-loader?" + JSON.stringify({ cacheDirectory: true }), ],
        include: path.join(__dirname, 'client'),
      },
      // CSS
      {
        test:/\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader", options: { ident: "postcss", plugins: () => [ require("postcss-flexbugs-fixes"), autoprefixer({ browsers: [ ">1%", "last 4 versions", "Firefox ESR", "not ie < 9" ], flexbox: "no-2009" }), ], }, },
        ]
      },
    ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
  },
};
