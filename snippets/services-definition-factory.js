
/**
 * Factory stijl is een shorthand voor provider:
 *
 * function factory(name, factoryFn) {
 *   return provider(name, { $get: factoryFn });
 * }
 */
angular.module('techsessieApp')
  .factory('ExampleService', function () {

    return {
      sayHello: function () {
        return "Hello, World!";
      }
    };

  });
