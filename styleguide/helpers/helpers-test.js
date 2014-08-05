'use strict';


module.exports.register = function(Handlebars, options) {



    //Group partails together in an array
    function bar(name, context, options) {
        console.log(name);
        return 'cat';

    }


    Handlebars.registerHelper('bar', bar);
};










