

var maincomponent = {
	/*bindings: {
          info: '='
      },*/
	template: `
		<div class="maincomponent">

			<div class="panel panel-default">
				<div class="panel-heading">
					<h1 class="panel-title pull-left">
						How to use filters?
					</h1>

					<button class="btn btn-default pull-right" ng-click="$ctrl.changeAge();">Change age</button>
					<button class="btn btn-default pull-right" ng-click="$ctrl.changeGender();">Change gender</button>
					
					<div class="clearfix"></div>
				</div>
				<div class="panel-body">
					<p><label>Current gender: {{$ctrl.currentGender}}</label></p>
					<p><label>Current age: {{$ctrl.currentAge}}</label></p>
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>Full name</th>
								<th>Initials</th>
								<th>Gender</th>
								<th>Age</th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="employee in $ctrl.people | genderButton:$ctrl.currentGender | ageButton:$ctrl.ageArray">
								<td>{{ employee.fullName }}</td>
								<td>{{ employee.fullName | initials }}</td>
								<td>{{ employee.gender | gender }}</td>
								<td>{{ employee.age }}</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
    	</div>
	`,
	controller: function ($filter) {
		var ctrl = this;
		ctrl.people = [
			{ fullName: 'Pedro Ruiz', gender: 'M', age: 21 },
			{ fullName: 'Ana Salazr', gender: 'F', age: 17 },
			{ fullName: 'Robert Rodriguez', gender: 'M', age: 54 },
			{ fullName: 'Luisa Gutierrez', gender: 'F', age: 30 },
			{ fullName: 'Antonia Solorzano', gender: 'F', age: 17 },
			{ fullName: 'Freddy Navas', gender: 'F', age: 5 },
			{ fullName: 'Maria Rincon', gender: 'F', age: 42 }
		];

		ctrl.currentGender = 'ALL';
		ctrl.currentAge = '0-100';
		ctrl.ageArray = [
			{ active: true, range: '0-100' },
			{ active: false, range: '0-10' },
			{ active: false, range: '10-20' },
			{ active: false, range: '20-30' },
			{ active: false, range: '30-40' },
			{ active: false, range: '40-50' }
		];
		ctrl.changeGender = function () {
			if (ctrl.currentGender === 'ALL') {
				ctrl.currentGender = 'M';
			}
			else {
				if (ctrl.currentGender === 'M') {
					ctrl.currentGender = 'F';
				}
				else {
					ctrl.currentGender = 'ALL';
				}
			}
		};

		ctrl.changeAge = function () {
			for (var i = 0; i < ctrl.ageArray.length; i++) {
				if (ctrl.ageArray[i].active === true) {
					ctrl.ageArray[i].active = false;
					if (i === ctrl.ageArray.length - 1) {
						ctrl.ageArray[0].active = true;	
					}
					else {
						ctrl.ageArray[i + 1].active = true;
					}
					ctrl.currentAge = ($filter('filter')(ctrl.ageArray, {active: true}, true)[0]).range;
					break;
				}
			}
		};
	}
}

angular
	.module('app')
	.component('maincomponent', maincomponent);