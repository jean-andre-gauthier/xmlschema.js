// Karma configuration
// Generated on Tue Jan 24 2017 19:06:38 GMT+0100 (CET)

module.exports = function(config) {
  config.set({
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        plugins: ["transform-es2015-modules-systemjs"],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
        "systemjs",
        'jasmine',
        'jasmine-matchers',
    ],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'source/**/*.js', included: false },
      { pattern: 'test/**/*.js', included: true },
      { pattern: 'test/**/*.xml', included: false, served: true, watched: true },
      { pattern: 'test/**/*.xml', included: false, served: true, watched: true }
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
        "karma-babel-preprocessor",
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-jasmine-matchers',
        "karma-systemjs"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "source/**/*.js": ["babel"],
      "test/**/*.js": ["babel"]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    systemjs: {
        // Path to your SystemJS configuration file
        configFile: 'system.conf.js',

        // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
        serveFiles: [
            // 'node_modules/**/*.js'
        ],


        // SystemJS configuration specifically for tests, added after your config file.
        // Good for adding test libraries and mock modules
        config: {
            paths: {
            }
        }
    }
  })
}
