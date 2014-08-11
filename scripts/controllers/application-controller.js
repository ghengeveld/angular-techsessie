'use strict';

angular.module('angularTechsessiePresentatieApp')
  .controller('ApplicationController', function ($scope) {
    $scope.$on('$routeChangeSuccess', function(e, next) {
      $scope.slide = next.params.slide;
    });
  });
