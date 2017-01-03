import template from './hero.html';

import './hero.scss';

const heroComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template
    };
};

export default heroComponent;
