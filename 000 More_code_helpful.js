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

//js chạy khi ở màn hình nào đó
<script type="text/javascript">
	if (matchMedia('only screen and (min-width: 641px)').matches) {
		//code here
	}
</script>

//Format giờ PM AM
function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}
