(function () {
    'use strict';

    angular
        .module('app')
        .controller('watchListController', watchListController);


    function watchListController($scope) {
        var vm = this;

        vm.wordlist = [];

        vm.evaluateWord = function(word) {
            vm.wordlist.push(word);
        }
    }
})();