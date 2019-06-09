var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'client/src', 'index.jsx'),
    output: {
        path: path.join(__dirname, './client/dist'),
        filename: '[hash].bundle.js',
        publicPath: ''
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'client'), 'node_modules'],
        extensions: [".jsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'client/src'),
        watchContentBase: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client/src', 'index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ["file-loader"]
            }
        ]
    },
};