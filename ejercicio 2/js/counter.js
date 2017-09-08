(function () {
	'use strict';

	angular
		.module('app')
		.directive('counter', counter);

	function counter() {
		return {
			transclude: true,
			controllerAs: 'ctrl',
			template: `
				<div style="border-style: solid;">
					<div class="center">
						<div ng-transclude></div>
					</div>
					<div class="center">
						<h3>{{ctrl.counter}}</h3>
					</div>	
				</div>			
			`,
			controller: function () {
				var vm = this;
				vm.counter = 0;
				vm.incrementCounter = function () {
					vm.counter++;
				}
			}
		}
	}
})();