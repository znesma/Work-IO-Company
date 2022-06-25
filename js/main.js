/* global $, alert. console */

$(function () {

    // nav bar toggler



    // animate the progress bar

   $('.progress1 .prog span').each(function () {

        $(this).animate({

            width: $(this).attr('data-progress')

        }, 1000 )
   
    });

    // animate the time div

    $('.discover .time button').click (function () {

        $(this).addClass("active").siblings().removeClass("active");
    });

        ///////////////////// Scroll to top /////////////////////


    var scrollButton = $('#scroll');

    $(window).scroll(function (){

        if($(this).scrollTop() >= 400) {

            scrollButton.show(500);
        } else {

            scrollButton.hide(200);

        }

    });

    scrollButton.click( function () {

        $("html,body").animate({
            
            scrollTop : 0

        }, 1000);
    });

});





/* 
window.onscroll = function () {

   // console.log(window.pageYOffset);

   if (window.pageYOffset >= 400 ) {

     //scrollButton.style.display = 'block' ;
     scrollButton.style.visibility='visible';

   }else {

    scrollButton.style.visibility='hidden';

   }

   scrollButton.onclick = function () {

    window.scrollTo(0,0)

   }
};  */


