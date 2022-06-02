const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  plugins: [
    new HtmlWebpackPulgin({
      title: 'React Sandbox',
      template: path.resolve(__dirname, 'src', 'public', 'index.html'),
    }),
  ],
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    historyApiFallback: true,
    client: {
      logging: 'error',
    },
  },
};
