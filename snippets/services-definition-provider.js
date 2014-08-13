
/**
 * Provider stijl is configureerbaar
 */
angular.module('techsessieApp')
  .provider('ExampleService', function () {
    this.name = 'Default';

    this.setName = function (name) {
      this.name = name;
    };

    this.$get = function () {
      var name = this.name;
      return {
        sayHello: function () {
          return "Hello, " + name + "!"
        }
      };
    };
  })
  .config(function (ExampleServiceProvider) {
    ExampleServiceProvider.setName('World');
  });
