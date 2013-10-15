'use strict';

angular.module('angularTechsessieApp')
  .controller('HoursController', function ($scope, customers, hours, HoursService) {

    $scope.customers = customers;
    $scope.hoursList = hours;
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
      HoursService.addEntry(hours).then(function() {
        $scope.hours = {};
        $scope.hoursList = HoursService.listEntries();
      });
    };

  });
