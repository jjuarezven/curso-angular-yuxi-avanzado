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
                    <li ng-repeat="word in listController.wordlist">
                        {{word}}
                    </li>
                </ul>
                </div>
            `,
            controller: 'watchListController as listController'
        }
    }
})();