'use strict';

module.exports = {
    options: {
        position: 'top',
        banner: '/*\nVersion: <%= pkg.version %>\nDate:<%= grunt.template.today("yyyy-mm-dd") %>\n */',
        linebreak: true
    },
    dist: {
        files: {
            src: [
                '<%= paths.dist %>/css/**/*.css',
                '<%= paths.dist %>/js/**/*.js'
            ]
        }
    },
    www: {
        files: {
            src: [
                '<%= paths.www %>/css/**/*.css',
                '<%= paths.www %>/js/**/*.js'
            ]
        }
    }
};
