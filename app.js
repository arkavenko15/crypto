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

$(function() {
 
        $(window).scroll(function() {
         
        if($(this).scrollTop() != 0) {
         
        $('.myBtn').fadeIn();
         
        } else {
         
        $('.myBtn').fadeOut();
         
        }
         
        });
         
        $('.myBtn').click(function() {
         
        $('body,html').animate({scrollTop:0},2000);
         
        });
         
}); 


let switchButton = document.querySelector(".switch-btn");
let sliderRoundLeft = document.querySelector(".slider-round-left");
let body = document.querySelector("main")
console.log(body)
switchButton.addEventListener('click',function(){
    if(sliderRoundLeft.classList.contains("slider-round-left"))
    {
        sliderRoundLeft.classList.remove("slider-round-left")
        sliderRoundLeft.classList.add("slider-round-right")
        body.setAttribute("style", "background-color:silver; ");
        console.log("hello")
    }
    else
    {
        sliderRoundLeft.classList.add("slider-round-left");
        sliderRoundLeft.classList.remove("slider-round-right");
        body.setAttribute("style", "background-color:#4b4b4b; ");
    }
})