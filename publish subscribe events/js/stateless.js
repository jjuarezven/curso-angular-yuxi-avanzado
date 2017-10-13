var statelessComponent = {
    bindings: {
        user: '<',
        onUpdate: '&'
    },
    
    controller: function () {
        var vm = this;
        // la primera vez que se ejecuta, se recibe el user del parent y se le asigna al mismo user del hijo, de esta manera se rompe el two-way binding
        vm.$onChanges = function (changes) {
            if (changes.user) {
                vm.user = angular.copy(vm.user);
            } 
        };

        vm.updateUser = function () {
            vm.onUpdate({
                $event: {
                    user: vm.user
                }
            });            
        };
    },
    template: `
    <div>
        <input type="text" ng-model="$ctrl.user.name">
        <input type="text" ng-model="$ctrl.user.location">
        <a href="" ng-click="$ctrl.updateUser();">Update</a>
    </div>
    `,
};

angular
.module('app')
.component('statelessComponent', statelessComponent);