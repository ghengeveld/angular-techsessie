
angular.module('angularTechsessiePresentatieApp')
  .controller('ExampleController', function($scope) {

    // 'Property'
    $scope.someValue = 42;

    // 'Method'
    $scope.add = function(num) {
      $scope.someValue += num;
    };

  });
