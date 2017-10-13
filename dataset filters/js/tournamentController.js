(function () {
    'use strict';

    angular
        .module('app')
        .controller('tournamentController', tournamentController);


    function tournamentController($scope) {
        var vm = this;
        vm.players = [
            { name: 'Todd Motto', rank: 4, gender: 'male' }, 
            { name: 'pedro perez', rank: 1, gender: 'male' }, 
            { name: 'Martha Fox', rank: 3, gender: 'female' }, 
            { name: 'Wonder Woman', rank: 7, gender: 'female' },
            {name: 'The thing', rank: 5, gender: 'male'}, 
            {name: 'Birdman', rank: 2, gender: 'male'},
            {name: 'Vilma Picapiedra', rank: 6, gender: 'female'},
        ];
    }
})();