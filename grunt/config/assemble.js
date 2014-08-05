'use strict';

/**
 * Templating tool of awesomeness
 * http://assemble.io/docs/
 */

module.exports = {
    options: {
        flatten: true,
        marked: {
            sanitize: false
        }
    },

    /**
     * Generate Template pages
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


    /**
     *  Styleguide
     */


    /**
     * Generate navigation / index page
     * note - This will generate off all other partials from the style guide and src
     * Todo - disable each individual partial being generated
     **/
    styleguideIndex: {
        options: {
            data: '<%= paths.src %>/data/**/*.json',
            helpers: [ '<%= paths.styleguide %>/helpers/**/*.js'],
            layoutdir: '<%= paths.styleguide %>/templates/layouts',
            partials: ['<%= paths.styleguide %>/templates/partials/**/*.hbs','<%= paths.src %>/templates/partials/**/*.hbs']    // Reference partials from assets
        },
        files: {
            '<%= paths.www %>/': ['<%= paths.styleguide %>/templates/pages/**/*.hbs', '<%= paths.src %>/templates/partials/**/*.hbs']
        }
    },


    /**
     * Generate all partials to pages for styleguide
     **/
    styleguidePages: {
        options: {
            data: '<%=  paths.src %>/data/**/*.json',
            helpers: ['<%= paths.styleguide %>/helpers/**/*.js'],
            layout: '<%= paths.styleguide %>/templates/layouts/styleguide-preview-page.hbs',
            partials: ['<%= paths.styleguide %>/templates/partials/**/*.hbs','<%= paths.src %>/templates/partials/**/*.hbs']      // Reference partials from assets
        },
        files: {
            '<%= paths.www %>/': ['<%=  paths.src %>/templates/partials/**/*.hbs']
        }
    }
};