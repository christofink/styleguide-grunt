'use strict';


module.exports.register = function(Handlebars, options) {

    Handlebars.registerHelper("foreachSubNav",function(arr,param) {
        if(param.inverse && !arr.length)
            return param.inverse(this);

            //Todo - provide option on sort through handlebars
            arr.sort(function(a, b) {
                var textA = a.data.sub;
                var textB = b.data.sub;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });     //Sort items


        var previousItem = '';

        return arr.map(function(item,index) {

            //Determine the beginning and end of a sub
            if(previousItem !== item.data.sub) {
                item.$isSubNew = true;
            } else {
                item.$isSubNew = false;
            }

            item.$index = index;
            item.$first = index === 0;
            item.$last  = index === arr.length-1;

            previousItem = item.data.sub;

            return param.fn(item);
        }).join('');
    });

};

