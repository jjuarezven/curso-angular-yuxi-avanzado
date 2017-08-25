(function() {
    'use strict';

    angular
        .module('app')
        .directive('watchList', watchList);
        
    function watchList() {
        return {
            restrict: 'E',
            scope: false,
            /* bindToController: {
                wordlist: '='
            }, */
            template: `
                <div class="controller">
                <ul>
                    <li ng-repeat="word in controller.wordlist">
                        {{word}}
                    </li>
                </ul>
                </div>
            `,
            controller: 'watchListController as controller'
        }
    }
})();