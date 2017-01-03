'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';

angular.module('StellarWind', [
    uiRouter,
    Common.name,
    Components.name
]).directive('app', AppComponent);
