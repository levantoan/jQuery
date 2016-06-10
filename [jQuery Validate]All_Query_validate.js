//Tùy biến hiển thị tin nhắn cho radio button
errorPlacement: function(error, element) {
		if (element.attr("type") == "radio") {
              error.insertAfter(element.parents('.radio_style'));
          } else {
              error.insertAfter(element);
          }
	console.log(error,element);
},
$.validator.addMethod("date_format", 
    function(value, element) {
    	return /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(1|3)\d{3}$/.test(value);
    }, 
    "Sorry, I've enabled very strict date validation"
);
