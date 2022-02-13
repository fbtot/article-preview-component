const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NONAME } = require('dns');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode,
  entry: {
    vendor: './src/vendor.js',
    main: { import: './src/index.js', filename: '[name]-[contenthash].js' },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.html/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: false,
};
