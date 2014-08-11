'use strict';

angular.module('angularTechsessiePresentatieApp')
  .controller('SlideController', function ($scope, $routeParams) {
    $scope.slideUrl = '/slides/' + $routeParams.slide + '.html';
  });
