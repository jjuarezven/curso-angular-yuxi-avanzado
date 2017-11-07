var component1 = {
    template: `
          <div>In this class we are going to learn how to use views and routing</div>
      `
  };
  
  angular
    .module("home")
    .component("component1", component1)
    .config(function($stateProvider) {
      $stateProvider.state("home.component1", {
        url: "^/component1",
        component: "component1",
        views: {
          "details@home": {
            component: "component1"
          }
        }
      });
    });
  