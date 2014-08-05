'use strict';


module.exports = {
    prod: {
        files: {
            '<%= paths.doc %>/js': ['<%= paths.src %>/js/**/*.js']
        }
    }
};