import template from './loader.html';

import './loader.scss';

const loaderComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template
    };
};

export default loaderComponent;
