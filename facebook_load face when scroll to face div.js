/**************************************************************
HTML to display
<div id="facebookHolder"></div>
**************************************************************/
/*AM22 Named Function to load FB box - START*/
$(document).ready(function(){
	var fb_loaded = false;
	var fb_div = $("#facebookHolder"); 
	function loadFaceBook()
	{
		var fb_div = $("#facebookHolder");
		var top = fb_div.offset().top;
		if ( !fb_loaded && ($(window).scrollTop() + window.innerHeight >= top ) )
		{
			fb_loaded = true;
		  
			$('#facebookHolder').append('<div id="fb-root"></div>'); 
			$('#facebookHolder').append('<div class="fb-comments" data-href="__YourURL__" data-numposts="5"></div>'); 
	 
		   jQuery.getScript('http://connect.facebook.net/en_US/all.js#xfbml=1', function() { 
			  FB.init({status: true, cookie: true, xfbml: true}); 
		   }); 
		 } 
	}
	if (fb_div.size() > 0) { 
		$(window).scroll(loadFaceBook); 
	}
});