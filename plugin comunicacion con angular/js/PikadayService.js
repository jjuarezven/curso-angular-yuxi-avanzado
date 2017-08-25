(function () {
    'use strict';

    angular
        .module('app')
        .service('PikadayService', PikadayService);

    function PikadayService() {
        return function (options) {
            return new Pikaday(options);
        }
    }
})();