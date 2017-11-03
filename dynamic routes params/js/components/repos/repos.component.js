var repos = {
    bindings: {
		list: '<'
	},
  template: `
  <div class="repos">
    My Repos:
    <div class="repo-search">
      <form ng-submit="$ctrl.submitForm()">
        <input ng-model="$ctrl.name">
        <button type="submit">View repos</button>
      </form>
    </div>
    <ul>
      <li ng-hide="$ctrl.list.length">
        Nothing here yet, type and search!
      </li>
      <li ng-repeat="repo in $ctrl.list">
        <a href="{{ repo.html_url }}">
          {{ repo.name }}
        </a>
        ({{ repo.stargazers_count }} stars)
      </li>
    </ul>
  </div>
`,
    /* ,controller: function(ReposService) {
    var ctrl = this;
    ctrl.list = [];
    ReposService.getRepos().then(function(response) {
      ctrl.list = response;
    });
  } */
};

angular
  .module("repos")
  .component("repos", repos)
  .config(function($stateProvider) {
    $stateProvider.state("repos", {
      url: "/repos/:username",
      component: "repos"
      // esta parte funciona como bindings en el componente, es por eso que tenemos acceso a la lista y podemos borrar el controller del componente
     , resolve: {
        list: function(ReposService) {
          return ReposService.getRepos();
        }
      }
    });
  });
