const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})
const path = require('path')
const outputDirectory = 'dist'
module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['./src/assets/scss']
          }
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [htmlPlugin]
}
