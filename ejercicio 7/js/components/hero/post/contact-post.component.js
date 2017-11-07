var heroPost = {
	template: `
		<div>
			Contact by post:
			<div>
				<p>123 Awesome Street</p>
				<p>Awesomeville</p>
				<p>Awesome City</p>
			</div>
		</div>
	`
};

angular
	.module('hero')
	.component('heroPost', heroPost)
	.config(function ($stateProvider) {
		$stateProvider
			.state('hero.post', {
				url: '/post',
				views: {
					'details@contact': {
						component: 'heroPost'
					}
				}
			});
	});
