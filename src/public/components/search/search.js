'use strict';

import angular from 'angular';

import './search.scss';

import searchComponent from './search.component';

const searchModule = angular.module('search', [])
    .directive('search', searchComponent);

export default searchModule;
