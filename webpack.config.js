const { resolve } = require('path')

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.js',
  ],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'webpack-library-template.js',
    library: 'WebpackLibraryTemplate',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
}
