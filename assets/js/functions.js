$(window).on({
  load:function(){
   if (window.matchMedia("(min-width: 800px)").matches) {
     $( "img#name-image" ).hide();
     $( "span#name" ).hover(
       function() {
         $( "img#name-image" ).show();
       }, function() {
         $( "img#name-image" ).hide();
       }
     );
   } else {
     $( "img#name-image" ).show();
   };
 }
});
$(window).on({
  resize:function(){
   if (window.matchMedia("(min-width: 800px)").matches) {
     $( "img#name-image" ).hide();
     $( "span#name" ).hover(
       function() {
         $( "img#name-image" ).show();
       }, function() {
         $( "img#name-image" ).hide();
       }
     );
   } else {
     $( "img#name-image" ).show();
   };
 }
});
