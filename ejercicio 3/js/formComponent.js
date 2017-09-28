

var formcomponent = {
	//transclude: true,
	template: `
		<div class="formcomponent">
			<form>
				<label for="txtName">Name:</label>
				<input name="txtName" type="text" ng-model="$ctrl.element.Name">
				<label for="txtDescription">Description:</label>
				<input name="txtDescription" type="text" ng-model="$ctrl.element.Description">
				<button ng-click="$ctrl.addElement();">Add</button>				
			</form>
			<elementcomponent></elementcomponent>
		</div>
	`,
	controller: function () {
		var ctrl = this;
		ctrl.element = {Name: '', Description: ''};
		ctrl.elements = [];
		ctrl.addElement = function () {
			ctrl.elements.push(ctrl.element);
			ctrl.element = {Name: '', Description: ''};
		};
	}
}

angular
	.module('app')
	.component('formcomponent', formcomponent);