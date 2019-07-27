const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const cleanerPlugin = new CleanWebpackPlugin();
const optimizeCSSPlugin = new OptimizeCSSAssetsPlugin({});

const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
});

const uglifyPlugin = new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true // set to true if you want JS source maps
});

const compressionPlugin = new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
});

module.exports = merge(common, {
    mode: 'production',
    entry: ['./client/src/index.jsx'],
    plugins: [
        cleanerPlugin,
        cssPlugin,
        uglifyPlugin,
        optimizeCSSPlugin,
        compressionPlugin
    ]
});
