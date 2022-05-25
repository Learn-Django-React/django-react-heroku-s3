const path = require("path");
const webpack = require('webpack');
const config = require('./webpack.config.js');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

config.output.path = path.resolve('./parakeet/web/static/dist/');
config.output.publicPath = "https://d1y53h0rs2bp6k.cloudfront.net/static/dist/"

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      STRIPE_LIVE_MODE: JSON.stringify('True'),
    }
  }),
  new Dotenv(),
  new BundleTracker({
    filename: './parakeet/webpack-stats-prod.json',
  }),
  new CleanWebpackPlugin(),
]

module.exports = config;
