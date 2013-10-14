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

    $scope.ordering = ['date', 'customer.name'];

    $scope.orderBy = function(property) {
      var asc = $scope.ordering.indexOf(property);
      if (asc > 0) {
        $scope.ordering.splice(asc, 1);
        $scope.ordering.unshift('-' + property);
        return;
      } else if (asc === 0) {
        $scope.ordering[0] = '-' + property;
        return;
      }
      var desc = $scope.ordering.indexOf('-' + property);
      if (desc > 0) {
        $scope.ordering.splice(desc, 1);
        $scope.ordering.unshift(property);
        return;
      } else if (desc === 0) {
        $scope.ordering[0] = property;
        return;
      }
      $scope.ordering.unshift(property);
    };

    $scope.addHours = function(hours) {
      $scope.hoursList.push(hours);
      $scope.hours = {};
    };

  });
