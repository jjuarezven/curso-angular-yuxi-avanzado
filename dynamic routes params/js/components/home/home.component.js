var home = {
	template: `
		<div class="home">Home Page</div>
	`
};

angular
	.module('home')
	.component('home', home)
	.config(function ($stateProvider, $urlRouterProvider, $transitionsProvider) {
		$transitionsProvider.onStart({
			to: function (state) {
				return !!(state.data && state.data.requiredAuth);
			}	
		}, function ($transition$) {
			console.log($transition$);
		});
		$stateProvider
			.state('home', {
				url: '/',
				component: 'home'
				// template: '<home></home>'
			});
		$urlRouterProvider.otherwise('/');
	});
