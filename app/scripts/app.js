'use strict';

angular.module('angularTechsessiePresentatieApp', ['hljs'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:slide', {
        template: '<div ng-include="slideUrl"></div>',
        controller: 'SlideController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
