'use strict';

import angular from 'angular';

import './artist-item/artist-item.scss';
import './artist-grid/artist-grid.scss';

import artistGridComponent from './artist-grid/artist-grid.component';
import artistItemComponent from './artist-item/artist-item.component';

import {SearchService} from '../../shared/SearchService/search.service';

const artistsModule = angular.module('artists', [])
    .service('SearchService', SearchService)
    .directive('artistGrid', artistGridComponent)
    .directive('artistItem', artistItemComponent);

export default artistsModule;
