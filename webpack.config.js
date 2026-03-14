const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      clean: true
    },

    devtool: isProd ? false : 'source-map',

    devServer: {
      static: './dist',
      port: 3000,
      open: true,
      hot: true
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]'
          }
        }
      ]
    },

    optimization: {
      minimize: isProd,
      minimizer: [
        `...`,
        new CssMinimizerPlugin()
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/favicon.ico',
        minify: isProd
      }),

      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ]
  }
}