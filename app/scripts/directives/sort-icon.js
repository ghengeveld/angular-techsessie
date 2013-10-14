angular.module('angularTechsessieApp')
  .directive('sortIcon', function() {

    return {
      restrict: 'A',
      scope: {
        ordering: '=sortIcon'
      },
      link: function(scope, element, attrs) {
        scope.$watch('ordering', function(ordering) {
          if (ordering) {
            var asc = ordering.indexOf(attrs.property);
            if (asc !== -1) {
              element.addClass('icon-arrow-up');
            } else {
              element.removeClass('icon-arrow-up');
            }
            var desc = ordering.indexOf('-' + attrs.property);
            if (desc !== -1) {
              element.addClass('icon-arrow-down');
            } else {
              element.removeClass('icon-arrow-down');
            }
          }
        }, true);
      }
    };

  });
