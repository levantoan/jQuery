// JavaScript Document

/*
Lay biến GET trên URL

********
cách dùng: 
$_GET['biến'];

/////////
VD
URL: http://localhost/Toan/YoutubeListVideo/?page=CAMQAA
Ta có: pageID = $_GET['page']; //pageID = CAMQAA;

*/
var $_GET = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
 function decode(s) {
	 return decodeURIComponent(s.split("+").join(" "));
 }

 $_GET[decode(arguments[1])] = decode(arguments[2]);
});