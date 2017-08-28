(function () {
    'use strict';

    angular
        .module('app')
        .directive('duplicatedClass', watchList);

    function watchList() {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $attrs.$observe('existentindex', function (value) {
                    if (value !== '-1' && $attrs.index === value) {
                        $attrs.$updateClass('red', 'normal');
                    }
                    else {
                        $attrs.$updateClass('normal', 'red');
                    }
                });
            }
        }
    }
})();