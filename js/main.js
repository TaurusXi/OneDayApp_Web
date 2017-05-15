/*

  Author: Supview
  Template: Dilla
  Version: 1.0
  URL: http://themeforest.net/user/Supview/


*/



var ajax_form = true;

jQuery(document).ready(function () { // Document ready

"use strict";

/*-----------------------------------------------------------------------------------*/
/*	02. STICKY
/*-----------------------------------------------------------------------------------*/

          $(document.body).trigger("sticky_kit:recalc");

    			$('.workinfo-right-side').stick_in_parent({

    				offset_top:110

    			});



/*-----------------------------------------------------------------------------------*/
/*	03. Flexslider
/*-----------------------------------------------------------------------------------*/


      $('#connected_feed').flexslider({
        animation: "slide",
        itemMargin: 3,
        controlNav: false,
        animationLoop: true,
        pauseOnHover: true
      });


/*-----------------------------------------------------------------------------------*/
/*	04. SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/



	$('.goto').on("click", function(e){
	    $('html,body').scrollTo(this.hash,this.hash,  {'axis':'y'});
	    e.preventDefault();
	});



/*-----------------------------------------------------------------------------------*/
/*	05. HEADER SLIDER
/*-----------------------------------------------------------------------------------*/



	$(".royalSlider").royalSlider({
		slidesSpacing: 0,
		autoHeight: false,
		fadeinLoadedSlide: true,
		autoScaleSlider: false,
		arrowsNav: false,
		loop: true,
    transitionSpeed: 1000,
    	autoPlay: {
    		// autoplay options go gere
    		enabled: true,
    		pauseOnHover: false
    	},
		loopRewind: true,
		controlNavigation: 'bullets',
		navigateByClick: true,
		transitionType: 'fade'
	});



/*-----------------------------------------------------------------------------------*/
/*	06. LIGHTBOX OF VIDEO
/*-----------------------------------------------------------------------------------*/



$('a.videolightbox').vanillabox({
    type: 'iframe'
});



/*-----------------------------------------------------------------------------------*/
/*	07. LOADING OF THE PAGE
/*-----------------------------------------------------------------------------------*/



function loading() {
	var clientWidth = document.body.clientWidth
	 if (clientWidth > 1000){
         document.getElementById("pc_app_img").src = "img/Test.png";

     }else {
         document.getElementById("pc_app_img").style.display = "none";
     }




    setTimeout(
		  function()
		  {
				$('#header .button').addClass("load");

		  }, 900);

		setTimeout(
		  function()
		  {
				$('#header .logo').addClass("load");

		  }, 400);

		setTimeout(
		  function()
		  {
				$('#header .see_more').addClass("load");

		  }, 1300);

		$('.loader').fadeOut('slow',function() {

			$('.loader img').fadeOut('slow');

		})


	}


  $(window).load(function(){
     loading();
  });


}); /* END OF Document Ready */
