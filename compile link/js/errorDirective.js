(function () {
    'use strict';

    angular
        .module('app')
        .directive('errorMessage', errorMessage);

    function errorMessage() {
        return {
            restrict: 'A',
            // la funcion link se llama 2 veces porque ejecuta su codigo después que el elemento (de la directiva) ha sido compilado
            /* link: function ($scope, $element, $attrs) {
                $element.addClass('error');
                $element.addClass('error--' + $attrs.type);
            } */
            compile: function ($element, $attrs) {
                // raw template
                $element.addClass('error');
                console.log(1);
                /* return {
                    pre: function ($scope, $element, $attrs) {
                        // access to child elements that are NOT linked
                    },
                    post: function ($scope, $element, $attrs) {
                        // access to child elements that are linked
                        $element.addClass('error--' + $attrs.type);
                    }
                }; */
                return function postLink($scope, $element, $attrs) {
                    $element.addClass('error--' + $attrs.type);
                    console.log(2);
                };
            }
        }
    }
})();