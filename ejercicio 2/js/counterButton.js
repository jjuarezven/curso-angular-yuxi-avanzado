(function () {
	'use strict';

	angular
		.module('app')
		.directive('counterButton', counterButton);

	function counterButton() {
		return {
			scope: {},
			template: `
				<div>
					<h3>{{label}}</h3>
					<button class="btn btn-important btn-block" style="" ng-click="callIncrementCounter();">Click on me!</button>
				</div>
			`,
			require: '^^counter',
			link: function ($scope, $element, $attrs, $ctrl) {
				$scope.callIncrementCounter = function () {
					$ctrl.incrementCounter();
				}
				$scope.label = $attrs.label;
			}
		}
	}
})();