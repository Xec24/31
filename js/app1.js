
 $(function (){
		$("#scrollUpArrow").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 200){
				$("#scrollUpArrow").fadeIn();
			} else{
				$("#scrollUpArrow").fadeOut();
			}
		});

		$("#scrollUpArrow").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});