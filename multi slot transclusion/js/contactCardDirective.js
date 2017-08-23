(function () {
    'use strict';

    angular
        .module('app')
        .directive('contactCard', contactCard);

    function contactCard() {
        return {
            transclude: {
                name: 'h1',
                desc: '?p'
            },
            restrict: 'E',
            template: `
            <div>
                <span ng-transclude="name"></span>
                <div ng-transclude="desc">No description</div>
            </div>
            `
        }
    }
})();