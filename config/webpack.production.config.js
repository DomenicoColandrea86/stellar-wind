'use strict';

var Webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var assetsPath = path.resolve(__dirname, '../src', 'assets');
var entryPath = path.resolve(__dirname, '../src/public', 'app.js');
var host = process.env.APP_HOST || 'localhost';

const extractCSS = new ExtractTextPlugin("app.css", {
    allChunks: true
});

var config = {
    devtool: 'source-map',
    entry: entryPath,
    output: {
        path: assetsPath,
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract(["css?minimize"])
            },
            {
                test: /\.scss/,
                loader: extractCSS.extract(["css?minimize!postcss!sass"])
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(gif|jpeg|jpg|png|svg|ico|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    postcss: () => {
        return [autoprefixer, precss];
    },
    plugins: [
        extractCSS,
        new ExtractTextPlugin("app.css"),
        new Webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

module.exports = config;
