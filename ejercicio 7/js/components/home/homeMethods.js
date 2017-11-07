var homeMethods = {
	template: `
		<div>
			<ul>
				<li ui-sref-active="active">
					<a ui-sref="home.component1">First Nested Component</a>
				</li>
				<li ui-sref-active="active">
					<a ui-sref="home.component2">Second Nested Component</a>
				</li>
			</ul>
		</div>
	`
};

angular
	.module('home')
	.component('homeMethods', homeMethods);