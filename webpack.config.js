const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  context: __dirname,

  entry: {
    app: [
      'react-app-polyfill/stable',
      './parakeet/web/static/js/index.js',
    ]

  },

  output: {
      path: path.resolve('./parakeet/web/static/bundles/'),
      filename: "[name]-[fullhash].js",
      publicPath: '/static/bundles/'
  },

  plugins: [
    new Dotenv({
      path: './parakeet/.env',
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false
    }),
    new BundleTracker({
      filename: './parakeet/webpack-stats.json',
    }),
    new CleanWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
                includePaths: ['./parakeet/web/static/scss'],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        type: 'asset/resource',
        generator: {
         filename: 'static/img/[name][ext]?[fullhash]'
       }
     },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
         filename: 'static/fonts/[name][ext]'
       }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
    modules: ['node_modules', './parakeet/web/static',]
  }
};
