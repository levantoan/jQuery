//Tùy biến hiển thị tin nhắn cho radio button
errorPlacement: function(error, element) {
		if (element.attr("type") == "radio") {
              error.insertAfter(element.parents('.radio_style'));
          } else {
              error.insertAfter(element);
          }
	console.log(error,element);
},
