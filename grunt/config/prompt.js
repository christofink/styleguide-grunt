
/*
 https://github.com/dylang/grunt-prompt
 */

module.exports = function(grunt, options) {

    //Validation tool to determine coorect versioning.
    var semver = require('semver'),
        currentVersion = options.pkg.version;

    return {
        bump: {
            options: {
                questions: [
                    {
                        config: 'bump.increment',
                        type: 'list',
                        message: 'Bump version from ' + '<%= pkg.version %>'.cyan + ' to:',
                        choices: [
                            {
                                value: 'build',
                                name:  'Build:  '.yellow + (currentVersion + '-?').yellow +
                                    ' Unstable, betas, and release candidates.'
                            },
                            {
                                value: 'patch',
                                name:  'Patch:  '.yellow + semver.inc(currentVersion, 'patch').yellow +
                                    '   Backwards-compatible bug fixes.'
                            },
                            {
                                value: 'minor',
                                name:  'Minor:  '.yellow + semver.inc(currentVersion, 'minor').yellow +
                                    '   Add functionality in a backwards-compatible manner.'
                            },
                            {
                                value: 'major',
                                name:  'Major:  '.yellow + semver.inc(currentVersion, 'major').yellow +
                                    '   Incompatible API changes.'
                            },
                            {
                                value: 'custom',
                                name:  'Custom: ?.?.?'.yellow +
                                    '   Specify version...'
                            }
                        ]
                    },
                    {
                        config:   'bump.version',
                        type:     'input',
                        message:  'What specific version would you like',
                        when:     function (answers) {
                            return answers['bump.increment'] === 'custom';
                        },
                        validate: function (value) {
                            var valid = semver.valid(value) && true;
                            return valid || 'Must be a valid semver, such as 1.2.3-rc1. See ' +
                                'http://semver.org/'.blue.underline + ' for more details.';
                        }
                    }

                ],
                then: function() {

                    //If custom version defined set external option
                    if(grunt.config.get('bump.increment') === 'custom') {
                        grunt.option('setversion', grunt.config.get('bump.version'));
                        grunt.task.run('bump');

                    } else {
                        grunt.task.run('bump:' + grunt.config.get('bump.increment'));
                    }

                }
            }
        }
    }
};

