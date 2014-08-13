// Karma configuration
module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // list of files / patterns to load in the browser
    files: [
      'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-route.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-resource.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-cookies.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-sanitize.js',
      'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.js',
      'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js',
      'http://cdn.rawgit.com/floydsoft/angular-underscore/master/angular-underscore.min.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',,
      'test/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false

  });
};