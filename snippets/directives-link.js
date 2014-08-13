
angular.module('techsessieApp')
  .directive('tsDropdownMenu', function () {

    return {
      restrict: 'EACM',
      templateUrl: 'partials/dropdown.html',
      replace: true,
      link: function (scope, element, attributes) {
        scope.items = ['A', 'B', 'C'];

        var className = attributes.itemClassName;
        element.find('li').addClass(className);
      }
    };

  });
