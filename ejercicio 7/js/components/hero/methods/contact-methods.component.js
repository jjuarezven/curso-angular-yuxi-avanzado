var contactMethods = {
	template: `
		<div>
			<ul>
				<li ui-sref-active="active">
					<a ui-sref="contact.phone">Componente 1</a>
				</li>
				<li ui-sref-active="active">
					<a ui-sref="contact.email">Componente 2</a>
				</li>
			</ul>
		</div>
	`
};

angular
	.module('contact')
	.component('contactMethods', contactMethods);
