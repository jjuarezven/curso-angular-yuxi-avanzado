/**
 * Below (commented out) are other supported
 * properties of the .component() method
 *
 * Remember: bindings: {} is a wrapper
 * for bindToController and scope: {}
 * so you never access $scope directly.
 * "$ctrl" is the default controllerAs name.
 */
(function () {
    // templateUrlco
	// controllerAs
	// transclude: true,
	// require: {
	//	 parent: '^^parent'
	// },
    'use strict';
    angular
        .module('app')
        .component('counter', {
            controllerAs: '$ctrl',
            bindings: {
                count: '='
            },
            template: `
            <div class="todo">
                <button type="button" ng-click="$ctrl.decrement();">-</button>
                <input type="text" ng-model="$ctrl.count">
                <button type="button" ng-click="$ctrl.increment();">+</button>
            </div>
        `,
            controller: function () {
                this.increment = function () {
                    this.count++;
                };
                this.decrement = function () {
                    this.count--;
                };
            }           
        });
})();