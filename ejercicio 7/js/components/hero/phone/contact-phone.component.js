var contactPhone = {
  template: `
        <div>Componente 1</div>
    `
};

angular
  .module("contact")
  .component("contactPhone", contactPhone)
  .config(function($stateProvider) {
    $stateProvider.state("contact.phone", {
      url: "^/phone",
      component: "contactPhone",
      views: {
        "details@contact": {
          component: "contactPhone"
        }
      }
    });
  });
