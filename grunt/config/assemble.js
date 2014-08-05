'use strict';

/**
 * Templating tool of awesomeness
 * http://assemble.io/docs/
 */

module.exports = function(grunt, options) {

    var jsonFile =  grunt.file.readJSON('../src/data/sg/sg-pages.json');

    return {
        options: {
            flatten: true,
            marked: {
                sanitize: false
            }
        },

        /**
         * Generate Template pages
         * Todo - verify if this is needed.
         **/
        build: {
            options: {
                data: '<%= paths.src %>/data/**/*.json',
                assets: '<%= paths.src %>',
                layoutdir: '<%= paths.src %>/templates/layouts',
                partials: ['<%= paths.src %>/templates/partials/*.hbs']
            },
            files: {
                '<%= paths.www %>/': ['<%= paths.src %>/templates/pages/**/*.hbs']
            }
        },

        //Step 1
        // Generate page structure format in JSON that will be ran through StyleguidePages to create the partial pages
        styleguidePageJson: {
            options: {
                data: '<%= paths.src %>/data/styleguidenav/*.json',
                helpers: [ '<%= paths.styleguide %>/helpers/**/*.js'],
                server: false,
                ext: '.json'
            },
            files: {
                '<%= paths.src %>/data/sg': ['<%= paths.styleguide %>/templates/pages/sg-pages.hbs']
            }
        }
        ,
        //Step 2
        // Generate actual pages from the json structure generate from above
        styleguidePages: {
            options: {
                data: '<%= paths.src %>/data/**/*.json',
                helpers: [ '<%= paths.styleguide %>/helpers/**/*.js'],
                layoutdir: '<%= paths.styleguide %>/templates/layouts',
                partials: ['<%= paths.src %>/templates/partials/**/*.hbs', '<%= paths.styleguide %>/templates/partials/**/*.hbs'],
                pages:jsonFile
            },
            files: {
                '<%= paths.www %>/': ['<%= paths.src %>/templates/pages/index.hbs']
            }
        }
    }
};