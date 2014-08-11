'use strict';

angular.module('angularTechsessiePresentatieApp').directive('linkHighlight', function($location) {

  return {
    restrict: 'A',
    scope: {
      className: '=linkHighlight'
    },
    link: function(scope, element, attrs) {
      scope.$on('$routeChangeSuccess', function() {
        var currentPath = '#' + $location.path();
        element.find('a').each(function() {
          var anchor = angular.element(this);
          if (currentPath === anchor.attr('href')) {
            anchor.addClass(scope.className);
          } else {
            anchor.removeClass(scope.className);
          }
        });
      });
    }
  };

});
