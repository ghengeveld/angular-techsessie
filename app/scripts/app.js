'use strict';

angular.module('angularTechsessieApp', ['ngRoute', 'angular-underscore'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/hours.html',
        controller: 'HoursController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
