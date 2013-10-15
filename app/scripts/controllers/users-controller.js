'use strict';

angular.module('angularTechsessiePresentatieApp')
  .controller('UsersController', function ($scope) {
    $scope.users = [];

    $scope.addUser = function(user) {
      $scope.users.push(user);
      $scope.user = {};
    }
  });
