
/*
 https://github.com/sindresorhus/grunt-shell
 */

module.exports = function(grunt, options) {

    //var bumpCommand =  'grunt bump --setversion <%= bump.increment %>';

    return {
        bump: {
            command: 'grunt bump'
    }
}
};