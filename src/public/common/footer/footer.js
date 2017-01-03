import angular from 'angular';

import './footer.scss';

import footerComponent from './footer.component';

const footerModule = angular.module('footer', [])
	.directive('footr', footerComponent);

export default footerModule;
