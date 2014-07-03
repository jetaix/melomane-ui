$(document).ready(function() {
	var lastScrollTop = 0;
	$(window).scroll(function(e) {

	  	var top = getTopPosition();

		var st = $(this).scrollTop();
		console.log(top);
		// scroll down
		if ((st > lastScrollTop) && (top > 0) && (top < 500)){
			$(".carousel-inner .item").css({
				"background-position-y": "+=1px",
			});
		}
		else if ((st < lastScrollTop) && (top > 0) && (top < 500)){
			$(".carousel-inner .item").css({
				"background-position-y": "-=1px",
			});
		}
		// scroll up
		// else if(st < lastScrollTop && ((top < 500) && (top >= 0)) ){
		// 	$(".carousel-inner .item").css({
		// 		"background-position-y": "-=1px",
		// 	});
		// }
		// else if((st < lastScrollTop) && (top > 0) && (top < 500)){
		// 	$(".carousel-inner .item").css({
		// 		"background-position-y": "+=1px",
		// 	});
		// }
		else if((top > 500) || (top < 0)){
			$(".carousel-inner .item").css({
				"background-position-y": "-20px",
			});
		}
   		lastScrollTop = st;

	});
});


function getTopPosition() {
    var top = $('body').scrollTop();
    return top;
}