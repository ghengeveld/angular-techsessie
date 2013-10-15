'use strict';

angular.module('angularTechsessieApp')
  .factory('HoursService', function($http, $q) {

    var apiBaseUrl = 'http://localhost:9002/api/';

    return {

      listEntries: function() {
        var defer = $q.defer();
        $http.get(apiBaseUrl + 'entries')
          .success(function(data) {
            defer.resolve(data);
          })
          .error(function(data, status) {
            defer.reject(status);
          });
        return defer.promise;
      },

      getEntry: function(entryId) {
        var defer = $q.defer();
        $http.get(apiBaseUrl + 'entries/' + entryId)
          .success(function(data) {
            defer.resolve(data);
          })
          .error(function(data, status) {
            defer.reject(status);
          });
        return defer.promise;
      },

      addEntry: function(entry) {
        return $http.post(apiBaseUrl + 'entries', entry);
      },

      updateEntry: function(entry) {
        return $http.put(apiBaseUrl + 'entries/' + entry.id, entry);
      },

      deleteEntry: function(entryId) {
        return $http.delete(apiBaseUrl + 'entries/' + entryId);
      }

    };

  });
