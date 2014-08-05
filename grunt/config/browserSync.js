'use strict';

// https://www.npmjs.org/package/grunt-browser-sync
module.exports = {
    bsFiles: {
        src :  [
            "css/**/*.css",
            "js/**/*.js",
            "*.html"
        ]
    },
    options: {
        watchTask: false,
        server: {
            baseDir: '<%= paths.www %>'
        }
    }
};