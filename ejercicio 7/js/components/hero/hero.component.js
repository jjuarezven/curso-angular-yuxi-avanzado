	var hero = {
		template: `
		<div class="contact contact-methods contact-details">
			<ul>
				<li ng-repeat="hero in $ctrl.heroes">
					<div class="col-xs-18 col-sm-6 col-md-3">
						<div class="thumbnail">
							<a href="">
								<img ng-src="{{hero.company}}" alt="">
								<div class="caption">
									<h4>{{hero.name}}</h4>
									<p>{{hero.info}}</p>
								</div>
							</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		  `,
		controller: function() {
		  var vm = this;
		  vm.heroes = [
			{ company: "images/dc logo.jpg", name: "Superman", info: "abc123" },
			{ company: "images/dc logo.jpg", name: "Batman", info: "abc123" },
			{ company: "images/marvel logo.png", name: "Thor", info: "abc123" },
			{ company: "images/marvel logo.png", name: "Hulk", info: "abc123" }
		  ];
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
	  