
tsApp.controller('ExampleController', function($scope, $location,
                                               $http, ExampleService) {

  $scope.saveForm = function(formData) {
    formData.referer = $location.absUrl();
    $http.post('/api/save', formData).then(function() {
      $location.path('/home');
    });
  };

  ExampleService.loadData().then(function(data) {
    $scope.someData = data;
  });

});
