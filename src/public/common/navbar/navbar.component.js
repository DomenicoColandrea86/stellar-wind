'use strict';

import template from './navbar.html';

const navbarComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template
    };
};

export default navbarComponent;
