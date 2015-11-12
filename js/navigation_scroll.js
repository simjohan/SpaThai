$(document).ready(function(){ 

// checking if user started to scroll      
   $(document).scroll(function() { 

    // if scrolled >= 140px from top, hide main nav and fade in hidden nav.
      if($(document).scrollTop() >= 140) {
          $('.nav').hide();
          $('.navigation_scroll').fadeIn('slow');
      } 
    // if scrolled back to <= 60px, show main nav and fadeout hidden nav.
       else if($(document).scrollTop() <= 60){
          $('.nav').show();
          $('.navigation_scroll').fadeOut('fast');
       }
   });
});