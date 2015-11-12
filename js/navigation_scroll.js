$(document).ready(function(){       
   $(document).scroll(function() { 
      if($(document).scrollTop() >= 140) {
          $('.nav').hide();
          $('.navigation_scroll').fadeIn('slow');
      } 

       else if($(document).scrollTop() <= 60){
          $('.nav').show();
          $('.navigation_scroll').fadeOut('fast');
       }
   });
});