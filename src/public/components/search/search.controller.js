'use strict';

import {SearchService} from '../../shared/SearchService/search.service';

class SearchController {
    constructor(SearchService) {
        this.SearchService = SearchService;
        this.term = '';
    }

    search(term) {
        this.SearchService.searchArtists(term);
    }
}

SearchController.$inject = ['SearchService'];

export default SearchController;
