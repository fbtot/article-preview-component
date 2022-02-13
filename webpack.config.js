const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
