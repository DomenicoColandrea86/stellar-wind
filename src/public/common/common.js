'use strict';

import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Footer from './footer/footer';
import Loader from './loader/loader';

export default angular.module('app.common', [
    Navbar.name,
    Hero.name,
    Footer.name,
    Loader.name
]);