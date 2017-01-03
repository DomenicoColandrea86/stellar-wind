'use strict';

import template from './search.html';
import controller from './search.controller';

const searchComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default searchComponent;
