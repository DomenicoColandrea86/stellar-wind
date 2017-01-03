'use strict';

class SearchService {

    constructor($log, $http, $q) {
        this.$log = $log;
        this.$http = $http;
        this.$q = $q;
        
        this._artists = null;
        this._loading = null;

        // default artists
        this.defaultArtists = [
            {
                name: 'The Weeknd',
                description: 'Feat. August Alsina, Jeremih and more',
                image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250%2C0)'
            },
            {
                name: 'Selena Gomez',
                description: 'Feat. Ariana Grande, Demi Lovato and more',
                image: 'http://iscale.iheart.com/catalog/artist/57706?ops=fit(250%2C0)'
            },
            {
                name: 'R. City',
                description: 'Feat. Nelly, Iyaz, Wiz Khalifa and more',
                image: 'http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250%2C0)'
            },
            {
                name: 'Justin Bieber',
                description: 'Feat. Shawn Mendes, One Direction and more',
                image: 'http://iscale.iheart.com/catalog/artist/44368?ops=fit(250%2C0)'
            },
            {
                name: 'Major Lazer',
                description: 'Feat. Iyaz, Dillon Francis &amp; DJ Snake and more',
                image: 'http://iscale.iheart.com/catalog/artist/43557?ops=fit(250%2C0)'
            },
            {
                name: 'Taylor Swift',
                description: 'Feat. Meghan Trainor, Katy Perry and more',
                image: 'http://iscale.iheart.com/catalog/artist/33221?ops=fit(250%2C0)'
            }
        ];

        // initialize service state
        this.init();
    }

    init() {
        this._loading = false;
        this._artists = this.defaultArtists;
    }

    get artists() {
        return this._artists;
    }

    set artists(artists) {
        this._artists = artists;
    }

    get loading() {
        return this._loading;
    }

    set loading(loading) {
        this._loading = loading;
    }

    searchArtists(term) {
        this._loading = true;
        return this.$http.post('//localhost:3000/api/v1/searchArtists', {term: term})
            .then((response) => {
                // set loading flag
                this._loading = false;
                // log response
                this.$log.info(response);
                // set artists
                this.artists = response.data.body
            }, (error)=> {
                this._loading = false;
                // log error
                this.$log.error(error);
                // set default state
                this.artists = this.defaultArtists
            });
    }
}

SearchService.$inject = ['$log', '$http', '$q'];

export {SearchService};
