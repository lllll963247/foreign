$(document).ready(function(){
	$("#addbtn").click(function(){
		$("#bg_grey").show(1);
		$("#add_div").fadeIn(400);
		$('#addbtn').hide();
	});
	$("#funsidebtn1").click(function(){
		$("#bg_grey").show(1);
		$("#funside").animate({width:'50%'});
	});
	$("#bg_grey").click(function(){
		$("#bg_grey").hide(1);
		$("#add_div").hide(1);
		$('#addbtn').show();
		$("#funside").hide(500);
		$("#funside").animate({width:'0%'});
	});
});