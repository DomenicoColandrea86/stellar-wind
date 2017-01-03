'use strict';

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const httpProxy = require('http-proxy');
const routes = require('../routes');
const StellarWindServer = require('./server');

const init = function init() {

    return new Promise((resolve) => {

        // Create express app
        let app = express();
        let proxy = httpProxy.createProxyServer();

        let isProduction = process.env.NODE_ENV === 'production';
        let host = process.env.APP_HOST || 'localhost';
        let publicPath = path.resolve(__dirname, '../..', 'public');

        if (!isProduction) {
            // all requests to localhost:3000/assets are proxied
            // to webpack-dev-server
            app.all(['/assets/*', '*.hot-update.json'], (req, res) => {
                proxy.web(req, res, {
                    target: 'http://' + host + ':3001'
                });
            });
        }

        // handle proxy errors
        proxy.on('error', (e) => {
            console.log('Could not connect to proxy, please try again...');
        });

        // CORS headers
        app.all('/*', (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            // Set custom headers for CORS
            res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
            if (req.method === 'OPTIONS') {
                res.status(200).end();
            } else {
                next();
            }
        });

        // express middleware
        app.use(bodyParser.json());
        app.use(methodOverride());

        // Use helmet to secure Express headers
        app.use(helmet());
        app.disable('x-powered-by');

        // set public path
        app.use(express.static(publicPath));

        // set up API routes
        app.use(routes.apiBaseUri, routes.api());

        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
            let error = new Error('Not Found');
            error['status'] = 404;
            next(error);
        });

        // error handler
        app.use(function (error, req, res, next) {
            res.status(error['status'] || 500);
            res.send({
                message: error.message,
                error: error
            });
            console.error(error, error.message);
        });

        app.get('/*', (req, res) => {
            res.sendFile(path.join(publicPath, 'index.html'));
        });

        return resolve(new StellarWindServer(app));
    });
};

module.exports = init;
