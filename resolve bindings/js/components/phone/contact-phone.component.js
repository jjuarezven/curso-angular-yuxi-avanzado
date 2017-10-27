var contactPhone = {
  template: `
        <div>Contact via phone: +584125749932</div>
    `
};

angular
  .module("contact")
  .component("contactPhone", contactPhone)
  .config(function($stateProvider) {
    $stateProvider.state("contact.phone", {
      url: "^/phone",
      component: "contactPhone"
    });
  });
