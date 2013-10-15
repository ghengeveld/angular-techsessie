
/**
 * Service stijl maakt een instantie van een class:
 *
 * function service(name, constructor) {
 *   return factory(name, ['$injector', function($injector) {
 *       return $injector.instantiate(constructor);
 *   }]);
 * }
 */
tsApp.service('ExampleService', function() {

  this.sayHello = function() {
    return "Hello, World!"
  };

});
