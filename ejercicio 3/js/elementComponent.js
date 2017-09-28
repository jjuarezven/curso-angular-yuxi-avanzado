

var elementcomponent = {
	/* bindings: {
		label: '@'
	}, */
	require: {
		formcomponent: '^^formcomponent'
	},
	//transclude: true,
	template: `
		<ul class="agenda">
			<li ng-repeat="element in $ctrl.elements">
				<div class="agenda-date" class="active">
					<div class="dayofmonth">{{$index + 1}}</div>
					<div class="dayofweek">{{element.Name}}</div>
					<div class="shortdate text-muted">{{element.Description}}</div>
				</div>			  
			</li>
		</ul>
		`,
	controller: function () {
		var ctrl = this;
		ctrl.$onInit = function () {
			ctrl.elements = ctrl.formcomponent.elements;
		} 
	}
}

angular
	.module('app')
	.component('elementcomponent', elementcomponent);