'use strict';


/**
 * Delete folder contents - Used before copying new assets over
 * https://npmjs.org/package/grunt-contrib-clean
 */
module.exports = {
    options: {
        force : true //Great power comes with great responsibility
    },
    styleguide: {
        src: ['<%= paths.www %>/']
    },
    dist: {
        src: ['<%= paths.dist  %>/']
    }
};
