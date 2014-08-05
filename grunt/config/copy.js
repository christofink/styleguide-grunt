'use strict';

/*
 https://github.com/gruntjs/grunt-contrib-copy
 */

module.exports = {
    styleguide: {
        files: [
                { expand: true, cwd: '<%= paths.src %>/fonts/', src: ['**/*'], dest: '<%= paths.www %>/fonts/' },
                { expand: true, cwd: '<%= paths.src %>/js/', src: ['src/*', 'vendor/*'], dest: '<%= paths.www %>/js/' },  //Copy all of images from site and temp into styleguide folder
                { expand: true, cwd: '<%= paths.src %>/imgs/', src: ['site/**/*'], dest: '<%= paths.www %>/imgs/' },
                { expand: true, cwd: '<%= paths.src %>/imgs/', src: ['placeholder/**/*'], dest: '<%= paths.www %>/imgs/' },
                { expand: true, cwd: '<%= paths.styleguide %>/js/', src: ['src/*', 'vendor/*'], dest: '<%= paths.www %>/js/' },
                { expand:true, flatten: true, src: ['<%= vendors.js.files %>'], dest: '<%= paths.www %>/js/vendor/' }
        ]
    },
    dist: {
        files: [
            { expand: true, cwd: '<%= paths.src %>/fonts/', src: ['**/*'], dest: '<%= paths.dist %>/fonts/' },
            { expand: true, cwd: '<%= paths.src %>/imgs/', src: ['site/**/*'], dest: '<%= paths.dist %>/img/' }, //Copy only outputs from site
            { expand: true, cwd: '<%= paths.src %>/js/', src: ['src/*', 'vendor/*'], dest: '<%= paths.dist %>/js/' },
            { expand:true, flatten: true, src: ['<%= vendors.js.files %>'], dest: '<%= paths.dist %>/js/vendor/' }
        ]
    }
};