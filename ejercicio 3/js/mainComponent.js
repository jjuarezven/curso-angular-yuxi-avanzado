

var maincomponent = {
	//transclude: true,
	template: `
		<div class="maincomponent">
			<button ng-click="$ctrl.buildForm();">{{$ctrl.buttonCaption}}</button>
			<formcomponent ng-if="$ctrl.showForm"></formcomponent>			
		</div>
	`,
	controller: function () {
		var ctrl = this;
		ctrl.showForm = false;
		ctrl.buttonCaption = "Build the form";
		ctrl.buildForm = function () {
			ctrl.showForm = true;
			if (ctrl.buttonCaption === "Build the form") {
				ctrl.buttonCaption = "Destroy the form";	
			}
			else {
				ctrl.$onDestroy();					
			}
		};

		ctrl.$onInit = function () {
			console.log('The children are NOT ready');
		} 

		ctrl.$onDestroy = function () {
			ctrl.showForm = false;
			console.log('form destroyed');	
		} 

		ctrl.$postLink = function () {
			console.log('The children are ready');
		}
	}
}

angular
	.module('app')
	.component('maincomponent', maincomponent);