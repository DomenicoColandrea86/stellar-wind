'use strict';

// Artist Model
const Artist = (() => {
    function Artist(artist) {
        this.name = artist.name ? artist.name : null;
        this.description = artist.description ? artist.description : null;
        this.image = artist.image ? artist.image : null;
    }

    return Artist;
})();

module.exports = Artist;
