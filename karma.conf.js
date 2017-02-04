// Karma Configuration

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            'src/fowl_data.js',
            'src/fowl_events.js',
            'test/*.js'
        ],
        exclude: [],
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
        autowatch: true,
        browsers: ['PhantomJS'],
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        singleRun: false,
        concurrency: Infinity
    });
}
