(function () {
    'use strict';

    angular
        .module('app')
        .controller('errorController', errorController);


    function errorController() {
        var vm = this;

        vm.list = [{ message: 'Oh no, an error occurred', type: 'error' }, { message: 'Make sure you fill in all the fields', type: 'warning' }, { message: 'This is invalid', type: 'invalid' }];
    }
})();