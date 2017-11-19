var path = require('path');
var webpack = require('webpack');
// require('url-loader?limit=10000!./file.png');
module.exports = {
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client', './client/app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, //to support @font-face rule
        loader: 'url-loader',
        query: {
          limit: '10000',
          name: '[name].[ext]',
          outputPath: 'fonts/'
          //the fonts will be emmited to public/assets/fonts/ folder
          //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
        }
      },
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // images
      {
        // test: /\.jpg$/,
        test: /\.(woff|png|jpg|svg|gif)$/,
        include: path.join(__dirname, 'client'),
        loader: 'url-loader?limit=10000'
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
