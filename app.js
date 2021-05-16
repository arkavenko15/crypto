$(document).ready(function(){
    var marquee = $('.hashtag-scroller');
    console.log(marquee);
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('.hash-items').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/140));
    });
    });