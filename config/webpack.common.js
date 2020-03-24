const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: { app: './src/index.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-ts-react-demo'
    })
  ],
  module: {
    rules: [
      /* 加载css样式 */
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      /* 加载图片资源 */
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
    ]
  }
}
