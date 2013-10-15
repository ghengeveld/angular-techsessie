
/**
 * Provider stijl is configureerbaar
 */
tsApp.provider('ExampleService', function() {

  this.name = 'Default';

  this.setName = function(name) {
    this.name = name;
  };

  this.$get = function() {
    var name = this.name;
    return {
      sayHello: function() {
        return "Hello, " + name + "!"
      }
    }
  };

});

tsApp.config(function(ExampleServiceProvider) {
  ExampleServiceProvider.setName('World');
});
