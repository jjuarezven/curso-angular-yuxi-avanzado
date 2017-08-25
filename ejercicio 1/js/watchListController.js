(function () {
    'use strict';

    angular
        .module('app')
        .controller('watchListController', watchListController);


    function watchListController($scope) {
        var vm = this;

        vm.word = '';
        vm.wordlist = ['1'];

        vm.evaluateWord = function() {
            vm.wordlist.push(vm.word);
        }
    }
})();