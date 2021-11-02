const path = require('path');

module.exports = {
  entry: './src/js/publicaciones.js',
  output: {
    filename: 'publicaciones.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
