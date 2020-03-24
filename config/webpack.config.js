const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: { app: './src/index.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 9000
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-ts-react-demo'
    })
  ]
}
