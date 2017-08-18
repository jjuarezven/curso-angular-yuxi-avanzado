(function () {
    'use strict';

    angular
        .module('app')
        .controller('counterController', counterController);


    function counterController($scope) {
        var vm = this;
        vm.count = 0;
        vm.countList = [];

        vm.increment = function increment() {
            vm.count++;
            vm.countList.unshift({ id: vm.count });
        };

        vm.decrement = function decrement() {
            vm.count--;
            vm.countList.unshift({ id: vm.count });
        };

        // es mas eficiente si lo que se quiere observar es los cambios a la coleccion y no a sus objetos internos
        $scope.$watchCollection(angular.bind(vm, function () {
            return vm.countList;
        }), function (newValue, oldValue) {
            // esto para evitar que se procese logica si no hay cambios en la propiedad que se esta examinando
            if (newValue === oldValue) {
                return;
            }
            console.log(newValue, oldValue);
        });

        // deep watch (se observa los cambios a nivel interno de cada objeto)
        /* $scope.$watch(angular.bind(vm, function () {
            return vm.countList;
        }), function (newValue, oldValue) {
            // esto para evitar que se procese logica si no hay cambios en la propiedad que se esta examinando
            if (newValue === oldValue) {
                return;
            }
            console.log(newValue, oldValue);
        }, true); */
        // el string 'count' no se puede usar cuando se usa controller as syntax
        /* $scope.$watch('count', function (newValue, oldValue) {
            console.log(newValue, oldValue);
        }); */
    }
})();