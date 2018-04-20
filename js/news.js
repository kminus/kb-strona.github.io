(function($) {

    $(document).ready(function() {

        var time = 500;

        $("#news-right").click(function() {
        
            var step = $(".news-div").width() + 20,
                scrolled = $("#news-window").scrollLeft() + step;

            $("#news-window").stop().animate({ scrollLeft: scrolled}, time, 'swing');
            
        });

        $("#news-left").click(function() {
        
            var step = $(".news-div").width() + 20,
                scrolled = $("#news-window").scrollLeft() - step;

            $("#news-window").stop().animate({ scrollLeft: scrolled}, time, 'swing');
            
        });
        
        $("#publications-right").click(function() {
        
            var step = $(".publications-div").width() + 20,
                scrolled = $("#publications-window").scrollLeft() + step;

            $("#publications-window").stop().animate({ scrollLeft: scrolled}, time, 'swing');
            
        });

        $("#publications-left").click(function() {
        
            var step = $(".publications-div").width() + 20,
                scrolled = $("#publications-window").scrollLeft() - step;

            $("#publications-window").stop().animate({ scrollLeft: scrolled}, time, 'swing');
            
        });

    });
        
})(jQuery);
    
    /*
    
        var step = 100,
            time = 100,
            type = 'linear';

        var timeOut = 0;
    
        $("#news-right").on('mousedown touchstart', function() {

            timeOut = setInterval(function(){
                var scrolledR = $("#news-window").scrollLeft() + step;
                $("#news-window").animate({ scrollLeft: scrolledR}, time-1, type);
            }, time);

            }).bind('mouseup mouseleave touchend', function() {
            clearInterval(timeOut);
        });
    
    
    
    
    
    $("#news-right").on('mousedown touchstart', function(e){



        timeOut = setInterval(function() {console.log(i++)}, 100);

    }).bind('mouseup mouseleave touchend', clearInterval(timeOut));
    
    
    
    
    
    
    
    $("#news-left").touchstart(function() {
        
        var scrolledR = $("#news-window").scrollLeft() - step;
        $("#news-window").animate({ scrollLeft: scrolledR}, 400, 'swing');
        
    });
    
    


*/