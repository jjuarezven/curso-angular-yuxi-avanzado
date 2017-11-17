'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngResource',
  'ngMessages'
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');

}]).
config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("studentList", {
    url: "/studentList",
    component: "studentList"
  }).state("asignatureList", {
    url: "/asignatureList",
    component: "asignatureList"
  });
  $urlRouterProvider.otherwise("/studentList")
}]);


