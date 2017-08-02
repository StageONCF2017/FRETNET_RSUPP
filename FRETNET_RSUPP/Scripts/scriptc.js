/*
********* WIZARD JS SCRIPT ************
*/
$(document).ready(function(){
	cl_a = '';
	cl_n = '';
	cl_d = '';
	$("#wiz li").hover(function(){
		switch($(this).attr('id')){
			case 'wizCL':
				if(!$(this).hasClass('wizCorL-On')){
					$(this).removeClass('wizCorL-Off');
					$(this).addClass('wizCorL-On');
					cl_a = 'wizCorL-Off';
					cl_n = 'wizCorL-On';
					$('#wiz1').removeClass('s1Off').addClass('s1On');
				}else	cl_a = 'wizCorL-On';
			break;
			case 'wiz1':
				if(!$(this).hasClass('s1On')){
					$(this).removeClass('s1Off');
					$(this).addClass('s1On');
					cl_a = 's1Off';
					cl_n = 's1On';
					$('#wizCL').removeClass('wizCorL-Off').addClass('wizCorL-On');
				}else	cl_a = 's1On';
			break;
			case 'wiz2':
				if(!$(this).hasClass('s2On')){
					$(this).removeClass('s2Off');
					$(this).addClass('s2On');
					cl_a = 's2Off';
					cl_n = 's2On';
				}else	cl_a = 'othersOn';
			break;
			case 'wiz3':
			if(!$(this).hasClass('s3On')){
					$(this).removeClass('s3Off');
					$(this).addClass('s3On');
					cl_a = 's3Off';
					cl_n = 's3On';
				}else	cl_a = 'othersOn';
			break;
			case 'wiz4':
			if(!$(this).hasClass('s4On')){
					$(this).removeClass('s4Off');
					$(this).addClass('s4On');
					cl_a = 's4Off';
					cl_n = 's4On';
				}else	cl_a = 'othersOn';
			break;
			case 'wiz5':
			if(!$(this).hasClass('s5On')){
					$(this).removeClass('s5Off');
					$(this).addClass('s5On');
					cl_a = 's5Off';
					cl_n = 's5On';
					$('#wizCR').removeClass('wizCorR-Off').addClass('wizCorR-On');
				}else	cl_a = 's5On';
			break;
			case 'wizCR':
				if(!$(this).hasClass('wizCorR-On')){
					$(this).removeClass('wizCorR-Off');
					$(this).addClass('wizCorR-On');
					cl_a = 'wizCorR-Off';
					cl_n = 'wizCorR-On';
					$('#wiz5').removeClass('s5Off').addClass('s5On');
				}else	cl_a = 'wizCorR-On';
			break;
			default:
				
			break;
		}
	}, function(){
			if(($(this).attr('id') == 'wiz1' || $(this).attr('id') == 'wiz3-1') && cl_a != 's1On'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
				if($(this).attr('id') == 'wiz1')
					$('#wizCL').removeClass('wizCorL-On').addClass('wizCorL-Off');
				else
					$('#wiz3CL').removeClass('wizCorL-On').addClass('wizCorL-Off');
			}
			if(($(this).attr('id') == 'wizCL' || $(this).attr('id') == 'wiz3CL') && cl_a != 'wizCorL-On'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
				if($(this).attr('id') == 'wizCL')
					$('#wiz1').removeClass('s1On').addClass('s1Off');
				else
					$('#wiz3-1').removeClass('s3-1On').addClass('s3-1Off');
			}
			if(($(this).attr('id') == 'wiz4' || $(this).attr('id') == 'wiz3-3') && cl_a != 's4On'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
				if($(this).attr('id') == 'wiz4')
					$('#wizCR').removeClass('wizCorR-On').addClass('wizCorR-Off');
				else
					$('#wiz3CR').removeClass('wizCorR-On').addClass('wizCorR-Off');
			}
			if(($(this).attr('id') == 'wizCR' || $(this).attr('id') == 'wiz3CR') && cl_a != 'wizCorR-On'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
				if($(this).attr('id') == 'wizCR')
					$('#wiz4').removeClass('s4On').addClass('s4Off');
				else
					$('#wiz3-3').removeClass('s3-3On').addClass('s3-3Off');

			}
			if(($(this).attr('id') == 'wiz5' || $(this).attr('id') == 'wiz3-3') && cl_a != 's5On'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
				if($(this).attr('id') == 'wiz5')
					$('#wizCR').removeClass('wizCorR-On').addClass('wizCorR-Off');
				else
					$('#wiz3CR').removeClass('wizCorR-On').addClass('wizCorR-Off');
			}
			if(($(this).attr('id') == 'wizCR' || $(this).attr('id') == 'wiz3CR') && cl_a != 'wizCorR-On'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
				if($(this).attr('id') == 'wizCR')
					$('#wiz5').removeClass('s5On').addClass('s5Off');
				else
					$('#wiz3-3').removeClass('s3-3On').addClass('s3-3Off');

			}
			if(($(this).attr('id') == 'wiz2' || $(this).attr('id') == 'wiz3' || $(this).attr('id') == 'wiz3-2') && cl_a != 'othersOn'){
				$(this).removeClass(cl_n);
				$(this).addClass(cl_a);
			}
	});
/*
**************** MODAL POPUP CONNEXION ******************
*/
	$('#aConn').click(function(){
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight}); 
		//transition effect;
		$('#mask').fadeTo("slow",0.8);
		
		//transition effect
		$('#dialog').fadeIn(1000);
	});	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('#dialog').hide(1000);
	});
/*
***************** CHECKBOX ligne hover ***************
*/
$('.btn-sub-menu li').hover(function(){
	if(!$(this).hasClass('liB-submOn') && $(this).parent('ul#ulB').length > 0){
		$(this).addClass('liNewSelcB');
		$(this).addClass('liB-submOn');
		$('img', this).attr('src','images/cartouches/checkbox-bg-bleu.gif');
		$('a', this).addClass('chk-txt');
	}else if(!$(this).hasClass('liV-submOn') && $(this).parent('ul#ulV').length > 0){
		$(this).addClass('liNewSelcV');
		$(this).addClass('liV-submOn');
		$('img', this).attr('src','images/cartouches/checkbox-bg-vert.gif');
		$('a', this).addClass('chk-txt');
	} else if(!$(this).hasClass('liG-submOn') && $(this).parent('ul#ulG').length > 0){
		$(this).addClass('liNewSelcG');
		$(this).addClass('liG-submOn');
		$('img', this).attr('src','images/cartouches/checkbox-bg-gris.gif');
		$('a', this).addClass('chk-txt');
	}
}, function(){
	if($(this).hasClass('liNewSelcB')){
		$(this).removeClass('liNewSelcB');
		$(this).removeClass('liB-submOn');
		$('img', this).attr('src','images/cartouches/checkbox-bg.gif');
		$('a', this).removeClass('chk-txt');
	}else 	if($(this).hasClass('liNewSelcV')){
		$(this).removeClass('liNewSelcV');
		$(this).removeClass('liV-submOn');
		$('img', this).attr('src','images/cartouches/checkbox-bg.gif');
		$('a', this).removeClass('chk-txt');
	}else 	if($(this).hasClass('liNewSelcG')){
		$(this).removeClass('liNewSelcG');
		$(this).removeClass('liG-submOn');
		$('img', this).attr('src','images/cartouches/checkbox-bg.gif');
		$('a', this).removeClass('chk-txt');
	}
});
});