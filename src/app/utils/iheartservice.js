'use strict';

const Promise = require('bluebird');
const request = require('request-promise');

const iheartservice = {

    // Search Artists
    searchArtists: function searchArtists(term) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                uri: `http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=${term}`,
                json: true
            };

            request(options)
                .then((response) => resolve(response.artists))
                .catch((error) => reject(error));
        });
    }
};

module.exports = iheartservice;
