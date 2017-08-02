




$(function(){  

    $(".aConn").hover(function(){ 
	$(this).removeClass("aConn"); 
        $(this).addClass("aConn2");  
    }, function(){
        $(this).removeClass("aConn2");
        $(this).addClass("aConn");
    });
});

