
import {SearchService} from '../../../shared/SearchService/search.service';

class ArtistsController {
    constructor($scope, SearchService) {
        this.$scope = $scope;
        this.SearchService = SearchService;

        // default state
        this.artists = this.SearchService.artists;
        this.loading = this.SearchService.loading;

        // watchers
        this.$scope.$watch(()=> this.SearchService.artists, (newVal, oldVal) => {
            if (newVal !== oldVal)
                this.artists = this.SearchService.artists;
        });

        this.$scope.$watch(()=> this.SearchService.loading, (newVal, oldVal) => {
            if (newVal !== oldVal)
                this.loading = this.SearchService.loading;
        });
    }
}

ArtistsController.$inject = ['$scope', 'SearchService'];

export default ArtistsController;
