/*Phone format 999-999-9999
Use: 
phone:{ 
	required: true,
	customphone: true
},
*/
$.validator.addMethod('customphone', function (value, element) {
    return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
}, "Please enter a valid phone number");

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

//Format value but not required by regex
$.validator.addMethod(
	"regex",
	function (value, element, regexp) {
	    var re = new RegExp(regexp);
	    return this.optional(element) || re.test(value);
	},
	"Sorry, I've enabled very strict email validation"
);
//Ex format email but not required by regex
email: {
	regex: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
},

//Change div error display
errorLabelContainer: $(".subscribe_newsletter_mess")
