(function($) {
    
    $(document).ready(function() {

        //reveal
        
        var win = $(window),
            win_height_padded = win.height();
        
        function revealOnScroll() {
            var scrolled = win.scrollTop(),
                win_height_padded = win.height();
    
            $(".revealOnScroll:not(.animated)").each(function() {
                var that = $(this),
                    offsetTop = that.offset().top;
    
                if (scrolled + win_height_padded > offsetTop) {
                    that.addClass('animated')
                }
            })
        }
    
        $(window).on('scroll', revealOnScroll);

        //kotwice

        $('a[href*="#section"]').click(function(event) {
            var target = $(this.hash),
                targetHash = this.hash.slice(1),
                offsetSection = targetHash == 'section1' ? 320 : 150;
                time = Math.abs(win.scrollTop() - (target.offset().top - offsetSection)) > 1300 ? 1300 : 500;

            target = target.length ? target : $('[name=' + targetHash + ']');

            if (target.length) {
                event.preventDefault();

                $('html, body').stop().animate({
                    scrollTop: (target.offset().top - offsetSection)                      
                }, time, function(){
                    $(target).focus();
                });
            }


        })

    });

})(jQuery);
