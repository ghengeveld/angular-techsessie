'use strict';

angular.module('angularTechsessiePresentatieApp')
  .directive('tabContent', function() {
    return {
      restrict: 'C',
      link: function(scope, element) {
        angular.element('a[data-toggle="tab"]').click(function (e) {
          e.preventDefault();
          angular.element(e.currentTarget).parent('li').addClass('active').siblings().removeClass('active');
          angular.element(angular.element(e.currentTarget).attr('href')).addClass('active').siblings().removeClass('active');
        });
      }
    };
  });
