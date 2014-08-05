'use strict';

module.exports = {
    dist: {
        src: ['<%= paths.src %>/imgs/sprites/**/*.png'],
        destImg: '<%= paths.dist %>/imgs/sprite.png',
        destCSS: '<%= paths.src %>/scss/site/modules/sprite.scss',
        cssFormat: 'scss',
        imgPath: '../imgs/sprite.png',
        algorithm: 'left-right',
        padding: 2
    },
    www: {
        src: ['<%= paths.src %>/imgs/sprites/**/*.png'],
        destImg: '<%= paths.www %>/imgs/sprite.png',
        destCSS: '<%= paths.src %>/scss/site/modules/sprite.scss',
        cssFormat: 'scss',
        imgPath: '../imgs/sprite.png',
        algorithm: 'left-right',
        padding: 2
    }
};