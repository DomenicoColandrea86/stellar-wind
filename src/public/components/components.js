'use strict';

import angular from 'angular';

import Home from './home/home';
import Artists from './artists/artists';
import Search from './search/search';

export default angular.module('app.components', [
    Home.name,
    Artists.name,
    Search.name
]);
