const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
