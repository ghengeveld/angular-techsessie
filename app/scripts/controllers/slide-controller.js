'use strict';

angular.module('angularTechsessiePresentatieApp')
  .controller('SlideController', function ($scope, $routeParams) {
    $scope.slideUrl = '/views/' + $routeParams.slide + '.html';
  });
