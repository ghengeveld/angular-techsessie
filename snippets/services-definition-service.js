
/**
 * Service stijl maakt een instantie van een class:
 *
 * function service(name, constructor) {
 *   return factory(name, ['$injector', function($injector) {
 *       return $injector.instantiate(constructor);
 *   }]);
 * }
 */
angular.module('techsessieApp')
  .service('ExampleService', function () {

    this.sayHello = function () {
      return "Hello, World!";
    };

  });
