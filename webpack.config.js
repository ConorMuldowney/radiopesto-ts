const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, "./src");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/i,
      include: path.resolve(__dirname, `${SRC_DIR}`),
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, `${SRC_DIR}`),
      "components": path.resolve(__dirname, `${SRC_DIR}/components`),
      "features": path.resolve(__dirname, `${SRC_DIR}/features`)
    },
    extensions: ['.tsx', '.ts', '.js'],
    
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
