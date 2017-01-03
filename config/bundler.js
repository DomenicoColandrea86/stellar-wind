'use strict';

var Webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js'),
    path = require('path'),
    fs = require('fs'),
    chalk = require('chalk'),
    host = process.env.APP_HOST || 'localhost';

module.exports = () => {

    var bundleStart = null;
    var compiler = Webpack(webpackConfig);

    compiler.plugin('compile', () => {
        console.log(chalk.yellow('Bundling...'));
        bundleStart = Date.now();
    });

    compiler.plugin('done', () => {
        console.log(chalk.green('Bundled in ' + (Date.now() - bundleStart) + 'ms!'));
    });

    var bundler = new WebpackDevServer(compiler, {
        publicPath: '/assets/',
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(3001, host, () => {
        console.log(chalk.yellow('Bundling project, please wait...'));
    });

};
