(function () {
    'use strict';

    angular
        .module('app')
        .directive('images', images);

    function images() {
        return {
            scope: {},
            bindToController: {
                header: '<'
            },
            controller: function ($scope) {
            },
            controllerAs: 'vm',
            transclude: {
                image: '?img',
                body: 'p'
            },
            restrict: 'E',
            template: `
            <div class="row vertical-align" style="padding: 15px;">
                <span class="col-sm-4" ng-transclude="image">
                    <img class="img-responsive" src="https://previews.123rf.com/images/arcady31/arcady311007/arcady31100700034/7426702-Oops-sign-Stock-Photo-sign-mistake-danger.jpg"></img>
                </span>
                <div class="col-sm-4">
                    <h3>{{vm.header}}</h3>
                    <h4 ng-transclude="body"></h4>
                </div>
            </div>
            `
        }
    }
})();