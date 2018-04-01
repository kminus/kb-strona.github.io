(function($) {
    
    $(document).ready(function() { 

// button menu ------------------------------------------------------

        var navMenu = $('.navigation-menu'),
            config = $('.config')
        
        $('.hamburger').click(function() {


            if(navMenu.hasClass('hidden')) {
                navMenu.removeClass('hidden');
            }  

        })

        $('.close').click(function() {

            if(!(navMenu.hasClass('hidden'))) {
                navMenu.addClass('hidden');
            }  

        })

        $('#config').click(function() {

            if(config.hasClass('hidden')) {
                config.removeClass('hidden');
            }  else {
                config.addClass('hidden');
            }

        })


// xxx ------------------------------------------------------

//-----------------------------------------------------------------

    });

})(jQuery);
