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
    ctrl.uiCanExit = function() {
      return window.confirm("Are you sure you want to leave?");
    };
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
        hero: function($transition$, HEROES_JSON) {
          var name = $transition$.params().itemName;
          if (!name) {
            return;
          }
          return HEROES_JSON.filter(function(item) {
            return item.name === name;
          })[0];
        }
      }
    });
  });
