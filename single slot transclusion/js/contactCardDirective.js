(function () {
    'use strict';

    angular
        .module('app')
        .directive('contactCard', contactCard);

    function contactCard() {
        return {
            transclude: true,
            restrict: 'E',
            template: `
            <div>
                <h4>Contact</h4>
                <div ng-transclude></div>
            </div>
            `
        }
    }
})();