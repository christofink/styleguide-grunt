'use strict';

module.exports.register = function(Handlebars, options) {


    function navigation() {


        /**
         * Return all nav items in an array
         * @returns {Array}
         * @private
         */
        function _getNavItems() {
            var partials = Handlebars.partials, aCollection = [];   //Get partial from collection
            for(var item in partials) {     //Filter any styleguide partials
                if(item.search("sg-") === -1) {
                    aCollection.push(item);
                }
            }
            return aCollection;
        };


        var navItems = _getNavItems();



        console.log(options.data);



        /**
         * Return html markup
         * @private
         */
        function _generateNavigation(navList) {
            var markup;
            markup += '<div class="sg-nav-container" id="sg-nav-container">';
            markup +=   '<ol class="sg-nav">';
            markup +=       navList;
            markup +=   '</ol>';
            markup += '</div>';

        }


        return  new Handlebars.SafeString( navItems);
    }

    Handlebars.registerHelper('navigation', navigation);
};