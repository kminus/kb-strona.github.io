(function($) {
    
    $(document).ready(function() {

        //popup

        $('.popup-bg').hide();
        $('.popup-bg').addClass('popup-opacity');

        $('.realizations-div').click(function() {
            $('.popup-bg').fadeIn(500);
        });

        $('.popup-close').click(function() {
            $('.popup-bg').fadeOut(500);
        });

        //slider

        $('.slider-image-div').first().addClass('slider-active');
        $('.slider-menu div').first().addClass('slider-active');

        $('.dot').click(function() {
            var $this = $(this),
                image = $('.slider-image-div'),
                index = $this.parent().children().index($this)

            $('.slider-menu div').removeClass('slider-active');
            image.removeClass('slider-active');

            $this.addClass('slider-active');
            image.eq(index).addClass('slider-active');

        })

        //unlock

        $('.realizations-article .unlock').click(function() {
            $('.realizations-container').toggleClass('realizations-container-open');

            if($('.realizations-container').hasClass('realizations-container-open')) {
                $('.unlock i').css({'transform' : 'rotate(180deg)', 'transition' : 'transform 0.2s ease'})
            } else {
                $('.unlock i').css({'transform' : 'rotate(0deg)', 'transition' : 'transform 0.2s ease'})
            }
        })

    });

})(jQuery);
