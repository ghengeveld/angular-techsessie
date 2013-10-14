'use strict';

angular.module('angularTechsessieApp')
  .controller('HoursController', function ($scope) {

    $scope.customers = [
      { name: 'Finalist' },
      { name: 'METRI' },
      { name: 'Kennisnet' },
      { name: 'VSP' },
      { name: 'MOOG' },
      { name: 'Amsterdam Museum' }
    ];

    $scope.hoursList = [{
      date: '2013-10-15',
      hours: 3,
      customer: { name: 'Finalist' },
      description: 'Techsessie AngularJS'
    }, {
      date: '2013-10-15',
      hours: 1,
      customer: { name: 'METRI' },
      description: 'Implementeren easter-egg'
    }, {
      date: '2013-10-15',
      hours: 2,
      customer: { name: 'Finalist' },
      description: 'Tafelvoetbal'
    }];

    $scope.addHours = function(hours) {
      $scope.hoursList.push(hours);
      $scope.hours = {};
    };

  });
