
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

        var navY = $('.main-header').offset().top;
    
        var stickyNav = function() {
            
            var scrollY = $(window).scrollTop();
            
            if (scrollY > navY) {
                $('.main-header').addClass('sticky')
            } 
            else {
                $('.main-header').removeClass('sticky')
            }

        }

        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        })

//-----------------------------------------------------------------

    });

})(jQuery);
