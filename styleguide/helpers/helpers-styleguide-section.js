'use strict';


/**
 * Dynamically generate a style guide section
 * @param Handlebars
 * @param options
 */
module.exports.register = function(Handlebars, options) {

    function section(name, context) {
        //Todo validate partial for avalible note reference

        var markdown, title, name = name.toLowerCase();

       if(typeof options.data[name] !== 'undefined') {
           markdown = options.data[name].note || 'note';
           title =  options.data[name].title || name;
       }


        var partial = Handlebars.partials[name];   //Get partial from collection


        if(typeof partial !== 'string') {
            partial = partial();
        }

        partial = _getStyleGuideMarktup(partial, name, markdown, title); //Generate dynamic markup


        var template = Handlebars.compile(partial); //Compile partial
        var templateContext = template(options.data);    //Add to template
        return new Handlebars.SafeString(templateContext); //Generate
    };


    function _getStyleGuideMarktup (partial, sName, markdown, title) {

        //Standard note
        if(typeof markdown === 'undefined') {
            markdown = 'note';
        }

        var markup = '<h2 class="sg-head sg-sub" id="00-Colors"><a href="/#' + sName.toLowerCase() + '" class="sg-pop">' + title + '</a></h2>';
            markup += '<div class="sg-section">';
            markup += '<div class="sg-pattern">';
            markup += partial;
            markup += '</div>';
            markup += '<div class="sg-annotation-container">';
            markup += '<div class="sg-annotations" style="display: none">{{md  "src/md/annotations/' + markdown + '.md" }}</div>'
            markup += '</div>';
            markup += '</div>';
        return markup;
    }

    Handlebars.registerHelper('section', section)
};