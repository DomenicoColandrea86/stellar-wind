import angular from 'angular';

import './navbar.scss';

import navbarComponent from './navbar.component';

const navbarModule = angular.module('navbar', [])
	.directive('navbar', navbarComponent);

export default navbarModule;
