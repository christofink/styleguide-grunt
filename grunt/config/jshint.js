'use strict';


/**
 * JS Hint
 * Note - This only hints custom code not vendors
 * https://npmjs.org/package/grunt-contrib-jshint
 */
module.exports = {
    options: {
        globals: {
            jQuery: true
        }
    },
    prod: {
        files: {
            src: ['<%= paths.src %>/js/src/**/*.js']
        }
    }
};