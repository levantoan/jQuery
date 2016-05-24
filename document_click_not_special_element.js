$(document).click(function(event) {
	if (!$(event.target).closest(".search_wrap_nav").length) {
    	$('.icon_search_click').removeClass('hiddenSearchButton');
  	$('.search_form_nav').removeClass('show_form');
    }
});
