
angular.module('techsessieApp')

  .config(function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  });
