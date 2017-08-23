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
                <span></span>
                <div></div>
            </div>
            `,
            link: function ($scope, $element, $attrs, $ctrl, $transclude) {
                var span = $element.find('span');
                var div = $element.find('div');
                var cloned = $transclude(function (elements) {
                    elements[1].textContent = elements[1].textContent.toUpperCase();
                });
                span.append(cloned[1]);
                div.append(cloned[3]);
            }
        }
    }
})();