module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        clean: {
            js: ['dist/*.js']
        },
        browserify: {
            client: {
                src: ['src/fowl_data.js', 'src/fowl_ui.js'],
                dest: 'dist/fowl.js'
            }
        }
    });

    // Load the plugins that provides the jshint task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load the clean plugin
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'jshint',
        'browserify'
    ]);
};
