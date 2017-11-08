var heroDetail = {
  bindings: {
    hero: "<"
  },
  template: `
    <div class="contact contact-methods contact-details">
        <div class="col-xs-18 col-sm-6 col-md-3">
            <div class="thumbnail">
                <img ng-src="{{$ctrl.hero.company}}" alt="">
                <div class="caption">
                    <h4>{{$ctrl.hero.name}}</h4>
                    <p>{{$ctrl.hero.info}}</p>
                </div>
            </div>
        </div>
    </div>
      `,
  controller: function() {
    var ctrl = this;
  }
};

angular
  .module("hero")
  .component("heroDetail", heroDetail)
  .config(function($stateProvider) {
    $stateProvider.state("heroDetail", {
      url: "/heroDetail:itemName",
      component: "heroDetail",
      params: {
        itemName: null
      },
      resolve: {
        hero: function($transition$) {
          var name = $transition$.params().itemName;
          if (!name) {
            return;
          }
          var heroes = [
            { company: "images/dc logo.jpg", name: "Superman", info: "abc123" },
            { company: "images/dc logo.jpg", name: "Batman", info: "abc123" },
            { company: "images/marvel logo.png", name: "Thor", info: "abc123" },
            {
              company: "images/marvel logo.png",
              name: "The Thing",
              info: "abc123"
            },
            { company: "images/dc logo.jpg", name: "Flash", info: "abc123" },
            { company: "images/marvel logo.png", name: "Hulk", info: "abc123" }
          ];
          return heroes.filter(function(item) {
            return item.name === name;
          })[0];
        }
      }
    });
  });
