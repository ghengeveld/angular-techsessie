
angular.module('angularTechsessiePresentatieApp')
  .factory('ExampleService', function($q) {
    return {
      loadData: function() {
        return $q.when('bar');
      }
    };
  });
