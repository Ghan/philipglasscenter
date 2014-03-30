// Modernizr.load({  
//   test: Modernizr.placeholder,  
//   nope: 'js/oldie.js'  
// });  

$(function(){
	$("nav a").click(function(e){
		e.preventDefault();
		var page = $(e.target).attr("href");
		console.log(page);
		$(".page").removeClass("active");
		$(".header-container").removeClass("open");
		$(page).addClass("active");
	});
	
	$("#logo").click(function(){
		$(".header-container").addClass("open");
		$(".page").removeClass("active");
		$("#home").addClass("active");
	});
});