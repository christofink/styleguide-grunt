'use strict';

module.exports.register = function(Handlebars, options) {

    /**
     *
     * @param name
     */
    function allpartials() {

        console.log("helo");

        /**
         * Returns a string of all partials
         * @private
         */
        function _getPartials() {
            var partials = Handlebars.partials, aCollection = [];   //Get partial from collection
            for(var item in partials) {

                //Filter sg- elements
                if(item.search("sg-") === -1) {
                    aCollection.push("{{section '" + item +"'}}");
                }
            }
            return aCollection.join("");
        }



        /**
         * Compile partial into template
         * @param partial
         * @returns {*|String|Function}
         * @private
         */
        function _getCompiledTemplate(partial) {
            return Handlebars.compile(partial); //Compile partial;
        }


        var allPartials = _getPartials();


        var templateCompiled = _getCompiledTemplate(allPartials);
        var templateCompiledContext = templateCompiled(options.data);
        return new Handlebars.SafeString(templateCompiledContext); //Generate
    }

    Handlebars.registerHelper('allpartials', allpartials);
};




