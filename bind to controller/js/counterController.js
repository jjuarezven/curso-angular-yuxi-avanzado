(function () {
    'use strict';

    angular
        .module('app')
        .controller('counterController', counterController);


    function counterController() {
        var vm = this;

        vm.increment = function increment() {
            vm.count++;
        };

        vm.decrement = function decrement() {
            vm.count--;
        };
    }
})();