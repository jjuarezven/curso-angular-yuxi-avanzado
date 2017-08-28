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

        vm.evaluateWord = function () {
            if ($scope.allowInsert) {
                vm.existentIndex = vm.wordlist.indexOf(vm.word);
                if (vm.existentIndex === -1) {
                    vm.wordlist.push(vm.word);
                    vm.word = '';
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
            if (newValue === '' || newValue === oldValue) {
                vm.buttonDisabled = true;
                return;
            }
            vm.buttonDisabled = false;
        });
    }
})();