'use strict';

angular.module('angularTechsessiePresentatieApp').directive('keynav', function() {

  return {
    restrict: 'A',
    link: function(scope, element) {
      angular.element('html').keydown(function(e) {
        if (!e.metaKey && !e.shiftKey && !e.ctrlKey && !e.altKey) {
          var activeMenuItem = element.find('aside .menu a.active').parent('li');
          var activeTab = element.find('section .nav-tabs li.active');

          switch (e.keyCode) {
          case 37: // left
            activeTab.prev('li').find('a').click();
            break;
          case 38: // up
            activeMenuItem.prev('li').find('a').click();
            break;
          case 39: // right
            activeTab.next('li').find('a').click();
            break;
          case 40: // down
            activeMenuItem.next('li').find('a').click();
            break;
          }
        }
      });
    }
  };

});
