const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              'babel-preset-es2015',
              'babel-preset-stage-0',
            ],
            plugins: [
              'babel-plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
};
