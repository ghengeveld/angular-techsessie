
tsApp.directive('exampleDirective', function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/example.html',
    controller: 'ExampleController'
  };
});
