/*
 https://github.com/vojtajina/grunt-bump
*/
/*
  Todo - prompt for version.
*/

module.exports = function(grunt, options) {
    return {
        options: {
            files: ['package.json'],
            updateConfigs: ['pkg'],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['-a'],
            createTag: true,
            tagName:'%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'upstream',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
        }
    }
};