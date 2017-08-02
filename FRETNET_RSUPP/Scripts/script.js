$(document).ready(function() {
	
	// alert('goooood');



// Animation Produit hover ///////////////////////////////////////////////////////////////////////////////////

	$(".cartouche").hover(
		function(){		
			 $(".hover", this).stop().animate({top:"0px", display:"block"}, 200);
		},
		function(){		
			 $(".hover", this).stop().animate({top:"210px", display:"block"}, 400);
		}
	);
	
	
	$(".s-cartouche").hover(
		function(){		
			 $(".hover", this).stop().animate({top:"0px", display:"block"}, 200);
		},
		function(){		
			 $(".hover", this).stop().animate({top:"210px", display:"block"}, 400);
		}
	);
	
	$(".s-s-cartouche").hover(
		function(){		
			 $(".hover", this).stop().animate({top:"0px", display:"block"}, 200);
		},
		function(){		
			 $(".hover", this).stop().animate({top:"210px", display:"block"}, 400);
		}
	);
	
	
});

$(function () {
    $("ul.men").css('display', 'none');

    $(".souslien").click(function () {
        $(this).find("ul.men").slideToggle("slow").css('display', 'block');
    });

     
    
});