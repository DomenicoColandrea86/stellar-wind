'use strict';

const Models = require('../models');
const iheartservice = require('../utils/iheartservice');

const artists = {

    // Search API
    search: function search(req, res, next) {

        iheartservice.searchArtists(req.body.term)
            .then((response) => {
                return response.slice(0, 6).map((artist) => {
                    return new Models.Artist({
                        name: artist.artistName,
                        description: artist.artistBio,
                        image: `http://iscale.iheart.com/catalog/artist/${artist.artistId}?ops=fit(250%2C0)`
                    });
                });
            })
            .then((artists) => res.status(200).send({status: res.statusCode, body: artists}))
            .catch((err) => res.status(500).send({status: res.statusCode, error: err.message}));
    }
};

module.exports = artists;
