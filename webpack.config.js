const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react',],
          },
        },
      },
    ],
  },
};
