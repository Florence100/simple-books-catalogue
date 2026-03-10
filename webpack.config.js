const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

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
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: isProd
      }),

      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),

      new CopyPlugin({
        patterns: [
          {
            from: 'src/assets',
            to: 'assets'
          }
        ]
      })
    ]
  }
}