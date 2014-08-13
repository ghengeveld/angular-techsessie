
angular.module('techsessieApp')

  .config(function ($routeProvider) {

    $routeProvider.when('/team', {
      templateUrl: 'views/team.html',
      resolve: {
        teamMembers: function ($http) {
          return $http.get('/api/team');
        }
      },
      controller: function (teamMembers) {
        // ...
      }
    });

  });
