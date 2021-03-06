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
                    <ul id="list">
                        <li ng-repeat="item in listController.wordlist" ng-bind="item" duplicated-class index="{{$index}}" word="{{listController.word}}"></li>
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