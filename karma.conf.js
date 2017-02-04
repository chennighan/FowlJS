// Karma Configuration

module.exports = function(config) {
    config.set({
        basePath: '',


        /**
         * frameworks to use.
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            'src/fowl_data.js',
            'src/fowl_ui.js',
            'test/*.js'
        ],


        // list of files to exclude
        exclude: [],


        /**
         * test results reporter to use.
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['progress', 'coverage'],


        coverageReporter: {
            reporters: [
                {type: 'text'},
                {type: 'html', dir: 'coverage/' }
            ],
            check: {
                global: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100
                }
            }
        },


        // enable / disable watching file and executing tests whenever any file changes
        autowatch: true,


        /**
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: ['PhantomJS'], // chrome is an option for local use


        phantomJsLauncher: {
            exitOnResourceError: true
        }
    });
};
