'use strict';

import template from './artist-item.html';
import controller from './artist-item.controller';

const artistComponent = () => {
    return {
        restrict: 'E',
        scope: {
            artist: '='
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default artistComponent;
