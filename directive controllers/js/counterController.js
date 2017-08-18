(function () {
    'use strict';

    angular
        .module('app')
        .controller('counterController', counterController);


    function counterController($scope) {
        var vm = this;
        vm.count = 0;

        vm.increment = function increment() {
            vm.count++;
        };

        vm.decrement = function decrement() {
            vm.count--;
        };
    }
})();