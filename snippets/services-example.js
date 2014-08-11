
tsApp.factory('ExampleService', function($http) {

  return {
    loadData: function() {
      return $http.get('http://www.google.com');
    }
  };

});
