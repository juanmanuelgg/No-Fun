const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.js',
    options: './src/options.js',
    popup: './src/popup.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js'] },
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { context: './src/', from: '**/*.png', to: './' },
        { context: './src/', from: '*.html', to: './' },
        { context: './src/', from: '*.json', to: './' },
        { context: './src/', from: '*.css', to: './' },
      ],
    }),
  ],
};
