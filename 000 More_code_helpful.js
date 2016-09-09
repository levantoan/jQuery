//Add span to second word
$('.title-img-header').each(function(){
	$(this).html(function(i, v) {	
	    return v.replace(/(\s)(\w+)/, '$1<span>$2</span>');
	});
});

//Add span to first word or more word
$.fn.wrapStart = function (numWords) { 
    var node = this.contents().filter(function () { return this.nodeType == 3 }).first(),
        text = node.text(),
        first = text.split(" ", numWords).join(" ");

    if (!node.length)
        return;
    
    node[0].nodeValue = text.slice(first.length);
    node.before('<span>' + first + '</span>');
};
$("div").wrapStart(1);
