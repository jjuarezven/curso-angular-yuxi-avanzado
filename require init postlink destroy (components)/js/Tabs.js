

var tabs = {
	transclude: true,
	template: `
		<div class="tabs">
			<ul class="tabs__list">
				<li ng-repeat="tab in $ctrl.tabs">
					<a href="" ng-bind="tab.label" ng-click="$ctrl.selectTab($index);"></a>
				</li>
			</ul>
			<div class="tabs__content" ng-transclude></div>
		</div>
	`,
	controller: function () {
		var ctrl = this;
		ctrl.tabs = [];
		ctrl.addTab = function (tab) {
			ctrl.tabs.push(tab);
		};
		ctrl.selectTab = function (index) {
			ctrl.tabs.forEach(function (tab) {
				tab.selected = false;
			});
			ctrl.tabs[index].selected = true;
		};
		ctrl.$postLink = function () {
			ctrl.selectTab(0);
		}
		ctrl.$onDestroy = function () {
			
		}
	}
}

angular
	.module('app')
	.component('tabs', tabs);