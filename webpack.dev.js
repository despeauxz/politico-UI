const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
});
  
const hotReloader = new webpack.HotModuleReplacementPlugin();


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: { app:
        ['react-hot-loader/patch', 'webpack-hot-middleware/client', './client/src/index.jsx']
    },
    resolve: {
        modules: [path.resolve(__dirname, 'client'), 'node_modules'],
        extensions: [".jsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'client/src'),
        watchContentBase: true,
        historyApiFallback: true,
        port: 8080
    },
    plugins: [
        cssPlugin,
        hotReloader,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client/src', 'index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    }
});
