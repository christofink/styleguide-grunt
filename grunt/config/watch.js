'use strict';

/**
 * Watch refresh browsers
 * https://github.com/gruntjs/grunt-contrib-watch
 */

module.exports = {
    scss: {
        files: ['<%= paths.src %>/scss/**/*.scss'],
        tasks: ['sass:www']
    },
    js: {
        files: ['<%= paths.src %>/js/**/*.js'],
        tasks: ['jscheck']
    },

    /**
     * Renders out all partials from the assets folder
     **/
    siteTemplates: {
        files: ['<%= paths.src %>/templates/**/*.hbs', '<%= paths.src %>/md/**/*.md', '<%= paths.src %>/data/**/*.json'],
        tasks: ['sg']
    },

    /**
     * If sg-templates has been modified then update
     **/
    styleguideNavigation: {
        files: ['<%= paths.src %>/data/styleguidenav/*.json'],
        tasks: ['sg']
    }
//    },
//
//
//    livereload : {
//        options : {
//            livereload: '<%= ports.livereload %>'
//        },
//        files: [
//            '<%= paths.styleguide %>/data/**/*.json',         //Data files
//            '<%= paths.src %>/data/**/*.json',             //Data files
//            '<%= paths.src %>/js/**/*.js',                 //JS files
//            '<%= paths.src %>/scss/**/*.scss',             //JS files
//            '<%= paths.src %>/md/**/*.md',                 //Markdown files
//            '<%= paths.src %>/templates/**/*.hbs'          //Templates
//        ]
//    }
};