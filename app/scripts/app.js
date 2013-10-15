'use strict';

angular.module('angularTechsessieApp', ['ngRoute', 'angular-underscore'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/hours.html',
        controller: 'HoursController',
        resolve: {
          customers: function($http) {
            return $http.get('http://localhost:9002/api/customers').then(function(response) {
              return response.data;
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
