'use strict';

/**
 * Validate the complexity of javascript
 * Note - This only hints custom code not vendors
 * https://npmjs.org/package/grunt-complexity
 */
module.exports = {
    build : {
        src: ['<%= paths.src %>/js/src/**/*.js'],
            options: {
            jsLintXML: '<%= paths.doc %>/complexity-report.xml', // create XML JSLint-like report
                errorsOnly: false, // show only maintainability errors
                cyclomatic: 10,
                halstead: 8,
                maintainability: 100
        }
    }
}