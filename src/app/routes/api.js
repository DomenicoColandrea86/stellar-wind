'use strict';

const express = require('express');
const api = require('../api');

// API routes
const apiRoutes = function apiRoutes(middleware) {

    // create router instance
    let router = express.Router();

    // artists route
    router.route('/searchArtists')
        .post(api.artists.search);

    return router;
};

module.exports = apiRoutes;
