(function() {
    'use strict';

    angular
        .module('app')
        .directive('counter', counter);
        
    function counter() {
        return {
            scope: {
                count: '='
            },
            template: `
                <div class="counter">
                    <h3>Counter: {{ counter.count }}</h3>
                    <a class="counter__increment" href="" ng-click="counter.increment()">Increment Counter</a> -
                    <a class="counter__decrement" href="" ng-click="counter.decrement()">Decrement Counter</a>
                    <div>
                        <a href="" ng-click="counter.updateName()">
                            Update name
                        </a>
                    </div>
                </div>
            `,
            controller: 'counterController as counter'
        }
    }
})();