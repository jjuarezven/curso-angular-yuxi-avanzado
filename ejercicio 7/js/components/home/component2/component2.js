var component2 = {
    template: `
          <div>For this we need to create a new array of objects for heroes, in the next view we are going to show all of the heroes and finally we can select one of them to view the whole information</div>
      `
  };
  
  angular
    .module("home")
    .component("component2", component2)
    .config(function($stateProvider) {
      $stateProvider.state("home.component2", {
        url: "^/component2",
        component: "component2",
        views: {
          "details@home": {
            component: "component2"
          }
        }
      });
    });
  