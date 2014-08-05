'use strict';





module.exports = function(grunt, options) {

    /**
     * Access folder location for localhost
     * @param connect
     * @param dir
     * @returns {*}
     */
    var mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };


    var lrSnippet = require('connect-livereload')({
        port: options.ports.livereload
    });


    return {
        options: {
        port :  options.ports.local,
        hostname : 'localhost'
        },
        livereload: {
            options: {
                middleware: function (connect) {
                    return [
                        lrSnippet,
                        mountFolder(connect, options.paths.www),
                        mountFolder(connect, options.paths.dist),
                        mountFolder(connect, options.paths.styleguide)
                    ];
                }
            }
        }
    }

};