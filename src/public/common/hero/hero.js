'use strict';

import angular from 'angular';

import heroComponent from './hero.component';

const heroModule = angular.module('hero', [])
	.directive('hero', heroComponent);

export default heroModule;
