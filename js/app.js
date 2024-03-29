'use strict';


// Declare app level module which depends on filters, and services
angular.module('InfotecApp', [
  'ngRoute',
  'InfotecApp.filters',
  'InfotecApp.services',
  'InfotecApp.directives',
  'InfotecApp.controllers'
]).
config(function($routeProvider) {
  //Example:
  $routeProvider.when('/', {templateUrl: 'partials/home-partial.html', controller: 'HomeController'});
  $routeProvider.when('/tracks', {templateUrl: 'partials/tracks-partial.html', controller: 'TracksController'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact-partial.html', controller: 'ContactController'});
  $routeProvider.when('/track/:id', {templateUrl: 'partials/sessions-partial.html', controller: 'SessionsController'});
  $routeProvider.otherwise({redirectTo:'/'});
});