/* Hide function */

$('.hidden').hide();


/* prevent social links */

$('#social').click(function(event) {
	event.preventDefault();
});


/* aside js */

$('#sidep').hide();

$(document).ready(function(){
	$("button").click(function(){
		$("#sidep").slideToggle();

	});
});


/*

function question8(){
 	$(".city").attr("src","http://lorempixel.com/g/500/400/food");
 }

 	$("#button3").click(question8);



function question2(){
		$("h2").text("Chris");
	 }

	 $("#button1").click(question2);



*/


/*  Blog Post One */

$(document).ready(function () {
   $('.posttext').hide();

   $('.read_more').click(function (event) {
       event.preventDefault();
       $(this).parent().find('.posttext').slideToggle('slow');
       $(this).text($(this).text() == 'Read less >' ? 'Read more >' : 'Read less >');
   });
});


/*  Blog Post Two */

$(document).ready(function () {
   $('.post_two').hide();

   $('#more_read2').click(function (event) {
       event.preventDefault();
       $(this).parent().find('.post_two').slideToggle('slow');
       $(this).text($(this).text() == 'Read less >' ? 'Read more >' : 'Read less >');
   });
});






