'use strict';

angular.module('angularTechsessieApp')
  .controller('HoursController', function ($scope) {
    $scope.hoursList = [];

    $scope.addHours = function(hours) {
      $scope.hoursList.push(hours);
      $scope.hours = {};
    }
  });
