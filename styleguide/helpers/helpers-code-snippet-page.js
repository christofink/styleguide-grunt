'use strict';


module.exports.register = function(Handlebars, options) {



    //Group partails together in an array
    function code( context, options) {
        var ret = "";

        console.log(options);

        for(var i=0, j=context.length; i<j; i++) {
            console.log(options.fn(context[i]));
        }

    }


    Handlebars.registerHelper('code', code);
};



