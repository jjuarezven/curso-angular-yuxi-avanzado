(function () {
    'use strict';

    angular
        .module('app')
        .directive('watchList', watchList);

    function watchList() {
        return {
            restrict: 'E',
            template: `
                <div>
                    <ul>
                        <li ng-repeat="item in listController.wordlist">
                            {{item}}
                            <duplicated-class existentindex="{{listController.existentIndex}}" wordlist="{{listController.wordlist}}"></duplicated-class>
                        </li>
                    </ul>
                </div>
            `,
            controller: 'watchListController as listController',
            link: function ($scope, $element, $attrs) {
                $attrs.$observe('word', function (value) {
                    $scope.allowInsert = value !== '' ? true : false;
                });
            }
        }
    }
})();