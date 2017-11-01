var contactEmail = {
  template: `
        <div>Contact via email: josejuarez78@gmail.com</div>
    `
};

angular
  .module("contact")
  .component("contactEmail", contactEmail)
  .config(function($stateProvider) {
    $stateProvider.state("contact.email", {
      url: "/email",
      views: {
        'details@contact': {
          component: 'contactEmail'
        }
      }
    });
  });
