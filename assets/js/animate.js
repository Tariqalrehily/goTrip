// By selecting the distanation, page scrool down to google map viewport
$(document).ready(function(){
 $( "#autocomplete" ).change(function() {
 $([document.documentElement]).animate({
   scrollTop: $("#map").offset().top
 }, 1500
   );
 });
})
