

var tab = {
	bindings: {
		label: '@'
	},
	require: {
		tabs: '^^tabs'
	},
	transclude: true,
	template: `
			<div class="tabs__content" ng-if="$ctrl.tab.selected">
				<div ng-transclude></div>
			</div>
		`,
	controller: function () {
		var ctrl = this;
		ctrl.tab = {
			label: ctrl.label,
			selected: false
		};

		ctrl.$onInit = function () {
			ctrl.tabs.addTab(ctrl.tab);
		}

	}
}

angular
	.module('app')
	.component('tab', tab);