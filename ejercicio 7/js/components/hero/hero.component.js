	var hero = {
		template: `
		<div class="contact contact-methods contact-details">
		<div class="form-group">
		
		<input class="form-control input-sm" id="inputsm" type="text" placeholder="Search" ng-model="$ctrl.query">
	  </div>
			<ul>
				<li ng-repeat="hero in $ctrl.heroes | filter: $ctrl.query | orderBy: 'name' ">
					<div class="col-xs-18 col-sm-6 col-md-3">
						<div class="thumbnail">
							<button ng-click="$ctrl.showDetail(hero.name);" style="background-color:white;border:none;height:295px;">
								<img ng-src="{{hero.company}}" alt="">
								<div class="caption">
									<h4>{{hero.name}}</h4>
									<p>{{hero.info}}</p>
								</div>
							</button>
						</div>
					</div>
				</li>
			</ul>
		</div>
		  `,
		controller: function($state) {
		  var vm = this;
		  vm.heroes = [
			{ company: "images/dc logo.jpg", name: "Superman", info: "abc123" },
			{ company: "images/dc logo.jpg", name: "Batman", info: "abc123" },
			{ company: "images/marvel logo.png", name: "Thor", info: "abc123" },
			{ company: "images/marvel logo.png", name: "The Thing", info: "abc123" },
			{ company: "images/dc logo.jpg", name: "Flash", info: "abc123" },
			{ company: "images/marvel logo.png", name: "Hulk", info: "abc123" }
		  ];
		  vm.showDetail = function (name) {
			$state.go('heroDetail', {
				itemName: name
			  });  
		  };
		}
	  };
	  
	  angular
	  .module('hero')
	  .component('hero', hero)
	  .config(function ($stateProvider) {
		  $stateProvider
			  .state('hero', {
				  url: '/hero',
				  component: 'hero'
			  });
	  });;
	  