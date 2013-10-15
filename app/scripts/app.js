'use strict';

angular.module('angularTechsessieApp', ['angular-underscore'])
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
