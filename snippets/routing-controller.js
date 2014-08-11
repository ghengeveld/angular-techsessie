
tsApp.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/contact', {
    templateUrl: 'views/contact.html',
    controller: function($scope) {
      $scope.sendContactForm = function() {
        // ...
      };
    }
  });

});
