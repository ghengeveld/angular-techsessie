
angular.module('techsessieApp')
  .directive('dropdownMenu', function () {

    return {
      restrict: 'EACM',
      templateUrl: 'partials/dropdown.html',
      replace: true,
      scope: {
        items: '='
      }
    };

  });
