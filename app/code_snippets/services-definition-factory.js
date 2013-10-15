
/**
 * Factory stijl is een shorthand voor provider:
 *
 * function factory(name, factoryFn) {
 *   return provider(name, { $get: factoryFn });
 * }
 */
tsApp.factory('ExampleService', function() {

  return {
    sayHello: function() {
      return "Hello, World!"
    }
  };

});
