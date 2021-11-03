const path = require('path');

module.exports = {
  entry: './src/js/peginaprincipal.js',
  output: {
    filename: 'paginaprincipal.js',
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
