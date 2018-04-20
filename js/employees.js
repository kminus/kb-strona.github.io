(function($) {
    
    $(document).ready(function() {

        $('.employees-article .unlock').click(function() {

            $('.employees-container').toggleClass('employees-container-open');

            if($('.employees-container').hasClass('employees-container-open')) {
                $('.employees-article .unlock i').css({'transform' : 'rotate(180deg)', 'transition' : 'transform 0.2s ease'})
            } else {
                $('.employees-article .unlock i').css({'transform' : 'rotate(0deg)', 'transition' : 'transform 0.2s ease'})
            }
        });

        $('.employees-div').hover(function(e) {
            var $this = $(this),
                index = $this.parent().children().index($this) - 1;

            e.stopPropagation();

            $('.ribbon').eq(index).toggleClass("focus-p");
            $('.employees-div').eq(index).toggleClass('visible');

            if ($this.offset().left > $(window).width() / 2) {
                $('.ribbon').eq(index).toggleClass("ribbon-left");
            }
        });

    });

})(jQuery);
