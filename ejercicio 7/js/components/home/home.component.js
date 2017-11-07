var home = {
	template: `
	<div class="contact">
	<div class="contact-methods">
		<div ui-view="methods"></div>
	</div>
	<div class="contact-details" ui-view="details"></div>
</div>
	`
};

angular
	.module('home')
	.component('home', home)
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'@': {
						component: 'home'
					},
					'methods@home': {
						component: 'homeMethods'
					}
				}
			});
		$urlRouterProvider.otherwise('/');
	});