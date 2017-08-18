(function () {
    'use strict';

    angular
        .module('app')
        .controller('counterController', counterController);


    function counterController($scope) {
        var vm = this;
        vm.count = 0;
        vm.name = 'Drink counter';

        vm.updateName = function increment() {
            vm.name = 'Food counter';
        };

        vm.increment = function increment() {
            vm.count++;
        };

        vm.decrement = function decrement() {
            vm.count--;
        };
    }
})();