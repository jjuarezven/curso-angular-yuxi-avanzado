var contact = {
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
	.module('contact')
	.component('contact', contact)
	.config(function ($stateProvider) {
		$stateProvider
			.state('contact', {
				url: '/contact',
				views: {
					'@': {
						component: 'contact'
					},
					'methods@contact': {
						component: 'contactMethods'
					}
				}
			});
	});
