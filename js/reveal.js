(function($) {
    
    $(document).ready(function() {
        
            var win = $(window),
                win_height_padded = win.height() * 0.95;
         
            function revealOnScroll() {
                var scrolled = win.scrollTop(),
                    win_height_padded = win.height() * 0.95;
        
                $(".revealOnScroll:not(.animated)").each(function() {
                    var that = $(this),
                        offsetTop = that.offset().top;
        
                    if (scrolled + win_height_padded > offsetTop) {
                        that.addClass('animated')
                    }
                })
            }
        
            $(window).on('scroll', revealOnScroll);

    });

})(jQuery);
