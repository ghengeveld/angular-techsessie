
tsApp.directive('tsDropdownMenu', function() {

  return {
    restrict: 'EACM',
    templateUrl: 'partials/dropdown.html',
    replace: true,
    link: function(scope, element, attributes) {
      scope.items = ['Een', 'Twee', 'Drie'];

      var className = attributes.itemClassName;
      element.find('li').addClass(className);
    }
  };

});
