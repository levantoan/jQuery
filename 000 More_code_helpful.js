//Add span to second word
$('li.but > a').html(function(i, v) {
    return v.replace(/\s(.*?)\s/, ' <span>$1</span> ');
});
