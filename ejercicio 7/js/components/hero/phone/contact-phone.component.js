var heroPhone = {
  template: `
        <div>Componente 1</div>
    `
};

angular
  .module("hero")
  .component("heroPhone", heroPhone)
  .config(function($stateProvider) {
    $stateProvider.state("hero.phone", {
      url: "^/phone",
      component: "heroPhone",
      views: {
        "details@hero": {
          component: "heroPhone"
        }
      }
    });
  });
