(function() {
    'use strict';

    angular
        .module('app')
        .controller('dateController', dateController);
        
    function dateController() {
        var vm = this;
        vm.date = new Date();
    }
})();