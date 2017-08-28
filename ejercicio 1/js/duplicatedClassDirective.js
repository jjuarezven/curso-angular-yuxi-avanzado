(function () {
    'use strict';

    angular
        .module('app')
        .directive('duplicatedClass', watchList);

    function watchList() {
        return {
            restrict: 'E',
            link: function ($scope, $element, $attrs) {
                $attrs.$observe('existentindex', function (value) {
                    if (value !== -1) {
                        
                        //console.log();
                        var index = Number(value);
                        $scope.$parent.listController.wordlist[index].addClass('red');                      
                    }                    
                });
            }
        }
    }
})();