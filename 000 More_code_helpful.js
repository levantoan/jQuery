//Add span to second word
$('.title-img-header').each(function(){
	$(this).html(function(i, v) {	
	    return v.replace(/(\s)(\w+)/, '$1<span>$2</span>');
	});
});
