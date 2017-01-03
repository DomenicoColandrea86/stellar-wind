'use strict';

import angular from 'angular';

import loaderComponent from './loader.component';

const loaderModule = angular.module('loader', [])
	.directive('loader', loaderComponent);

export default loaderModule;
