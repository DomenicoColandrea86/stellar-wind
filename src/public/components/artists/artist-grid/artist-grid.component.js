import template from './artist-grid.html';
import controller from './artist-grid.controller';

const artistGridComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default artistGridComponent;
