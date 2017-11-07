var heroMethods = {
	template: `
		<div>
			<ul>
				<li ui-sref-active="active">
					<a ui-sref="hero.phone">Componente 1</a>
				</li>
				<li ui-sref-active="active">
					<a ui-sref="hero.email">Componente 2</a>
				</li>
			</ul>
		</div>
	`
};

angular
	.module('hero')
	.component('heroMethods', heroMethods);
