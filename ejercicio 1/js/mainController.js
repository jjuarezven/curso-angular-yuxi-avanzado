(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);
        
    function mainController() {
        var vm = this;
        
        vm.word = '';
    }
})();