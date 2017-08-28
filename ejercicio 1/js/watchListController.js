(function () {
    'use strict';

    angular
        .module('app')
        .controller('watchListController', watchListController);


    function watchListController($scope) {
        var vm = this;

        vm.word = '';
        vm.wordlist = [];
        vm.counter = 0;
        vm.buttonDisabled = false;
        vm.existentIndex = -1;
        vm.displayError = false;

        vm.evaluateWord = function () {
            if ($scope.allowInsert) {
                vm.existentIndex = vm.wordlist.indexOf(vm.word);
                if (vm.existentIndex === -1) {
                    vm.wordlist.push(vm.word);
                    vm.word = '';
                    vm.displayError = false;
                }
                else {
                    vm.displayError = true;
                }
                vm.buttonDisabled = true;
            }
        }

        $scope.$watchCollection(angular.bind(vm, function () {
            return vm.wordlist;
        }), function (newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }
            vm.counter++;
        });

        $scope.$watch(angular.bind(vm, function () {
            return vm.word;
        }), function (newValue, oldValue) {
            var itemIndex = vm.wordlist.indexOf(newValue);
            if (itemIndex !== -1) {                
                vm.buttonDisabled = true;
                vm.displayError = true;
                return;
            }
            if (newValue === '') {                
                vm.buttonDisabled = true;
                vm.displayError = false;
                return;
            }
            vm.buttonDisabled = false;
            vm.displayError = false;
        });
    }
})();