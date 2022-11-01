const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './frontend/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'frontend/public'),
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'frontend/public'),
    },
    compress: true,
    port: 9000,
    client: {
      progress: true,
    },
    open: true,
  },
};
