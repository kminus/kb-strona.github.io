
(function($) {
    
    $(document).ready(function() { 

// button menu ------------------------------------------------------

        var navMenu = $('.navigation-menu');
        
        $('.hamburger').click(function() {


            if(navMenu.hasClass('navigation-menu-hidden')) {
                navMenu.removeClass('navigation-menu-hidden');
            }  

        })

        $('.close').click(function() {

            if(!(navMenu.hasClass('navigation-menu-hidden'))) {
                navMenu.addClass('navigation-menu-hidden');
            }  

        })

// sticky nav ------------------------------------------------------

//-----------------------------------------------------------------

    });

})(jQuery);
