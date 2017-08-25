(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);
        
    function mainController() {
        var vm = this;
        
        vm.firstCount = 5;
        vm.secondCount = 10;
        vm.thirdCount = 15;
    }
})();