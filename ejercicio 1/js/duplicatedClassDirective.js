(function () {
    'use strict';

    angular
        .module('app')
        .directive('duplicatedClass', watchList);

    function watchList() {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $attrs.$observe('word', function (value) {
                    var itemIndex = $scope.$parent.listController.wordlist.indexOf(value);
                    if (itemIndex !== -1 && itemIndex === Number($attrs.index)) {
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