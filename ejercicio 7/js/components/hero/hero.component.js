var hero = {
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
	.module('hero')
	.component('hero', hero)
	.config(function ($stateProvider) {
		$stateProvider
			.state('hero', {
				url: '/hero',
				views: {
					'@': {
						component: 'hero'
					},
					'methods@hero': {
						component: 'heroMethods'
					}
				}
			});
	});
