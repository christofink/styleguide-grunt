'use strict';

module.exports = function(grunt) {

    //Load grunt tasks automatically
    require('load-grunt-tasks')(grunt,  {pattern: ['grunt-*', 'assemble', '!connect-livereload'] });

    var options = {
        // Project settings
        paths: {
            // Configurable paths
            src              : '../src',
            doc             : '../documentation',
            dist            : '../dist',
            www             : '../www',
            styleguide      : '../styleguide',
            bower           : '../bower/bower_components'
        },
        ports: {
            local       : 9000,
            livereload  : 35729
        },
        vendors: grunt.file.readJSON('vendors.json'),
        pkg: grunt.file.readJSON('package.json')
    };

    //Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    //Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('default', ['host']);

    grunt.registerTask('js', ['newer:jshint', 'newer:usebanner:www']);

    grunt.registerTask('css', ['newer:sass:www', 'newer:usebanner:www', 'newer:sprite:www' ]);

    grunt.registerTask('host', ['browserSync']);

    grunt.registerTask('report', ['plato']);      //Displaty reports on js

    grunt.registerTask('dist', ['clean:dist', 'copy:dist', 'sass:dist', 'usebanner:dist', 'sprite:dist']);

    grunt.registerTask('release', ['prompt:bump']);

    // Generate navigation structure for styleguide
    grunt.registerTask('struct', ['assemble:styleguidePageJson']);

    // Generate html pages from structure generated
    grunt.registerTask('temp', ['assemble:styleguidePages']);

    grunt.registerTask('sg', [ 'copy:styleguide', 'sass:www', 'sass:styleguide',  'assemble:styleguidePages']);

    grunt.registerTask('build', ['clean:styleguide', 'sg' ]);


};