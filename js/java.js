
$(document).ready(function(){
         
    $("body").niceScroll({
    cursorcolor: "#3dc4b6",
    zindex: "auto" | [1050],
    cursorborder: "1px solid #3dc4b6"
});

    // set the header height
    $('#home').height($(window).height());
    
    $(window).resize(function () {
        $('#home').height($(window).height());
    });
    
   $('.owl-carousel').owlCarousel({
       rtl:true,
       nav:false,
    loop:true,
        autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
       responsive:{
        0:{
            items:1
        },
          400:{
            items:1
        },
        600:{
            items:2
        },
          800:{
            items:2
        },
        1000:{
            items:3
        }
    }
   });
  $('.loop').owlCarousel({
    center: true,
    loop:true,
    margin:10,
     responsive:{
        0:{
            items:1
        },
          400:{
            items:1
        },
        600:{
            items:2
        },
          800:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
    var owl = $('.owl-carousel');
    owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

    
    
      $(window).scroll(function() { // check if scroll event happened
          
          if ($(window).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
         $("nav.navbar-light").addClass('custom');
              $(".navbar-light .navbar-nav .nav-link").css("color","#868e96");
              $(".navbar-light .navbar-brand").css("color","#868e96");
              $(".navbar-light .navbar-nav .nav-link,.navbar-light .navbar-brand,i.fa-search").css("color","#868e96");
             
        } else {
          $("nav.navbar-light").removeClass('custom');
              $(".navbar-light .navbar-nav .nav-link").css("color","#FBFFFD");
              $(".navbar-light .navbar-brand").css("color","#FBFFFD");
             $(".navbar-light .navbar-nav .nav-link,.navbar-light .navbar-brand,i.fa-search").css("color","#FBFFFD");
           
        }
       
        
        /*****************UP BOTTOM*************************************/
         
          
           if ($(window).scrollTop() >300){ //VISIBLE
            $(".up").fadeIn();
        }else{
            $(".up").fadeOut(); //HIDDEN

        }
        
        
          
      }); /************ END OF SCROLL FUNCTION**************/
    
       
        $(".up").click(function(){
            $("html,body").animate({scrollTop:0},1000);
            
        });
          /*******************************/
    
    $("a[href^='#']").click(function(){
        var hr= $(this).attr("href");
        var t=$(hr).offset().top;
        $("html,body").animate({scrollTop:t},1000);
    });
    
    
  
    
    $("input[type='search']").focus(function (){
    $(this).css('boxShadow', 'none');
      $(this).css('borderColor', 'white');

})
    $(".up").focus(function (){
    $(this).css('boxShadow', 'none');
      
})
    $(".btn.btn-outline-success.my-2.my-sm-0.lang").focus(function (){
    $(this).css('boxShadow', 'none');
              $(this).css('borderColor', '#3dc4b6');
  
})
      $("input[type='email'],input[type='text'],textarea").focus(function (){
    $(this).css('boxShadow', 'none');
      $(this).css('borderColor', '#3dc4b6 ');

})
          $("textarea,input[type='text'],input[type='email']").blur(function (){
    $(this).css('boxShadow', 'none');
      $(this).css('borderColor', '#ccc ');

})
           
   
  /******************* dropdown hover ***************/
    
   
    
    $('li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
    }); 
    
    
    
    
    
    // navbar mobile view clicking collapse 
  $("a.nav-link.lang").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
    
    $("i#search").click(function() {
 
    $("div#hiddensearch").fadeIn(200);
//    $("i#search").css('background','white');  
  });
    $("i.fa-times").click(function() {
    $("div#hiddensearch").fadeOut(200);
        $("nav input.form-control.mr-sm-2.ser.lang").val("");
        $("nav input.form-control.mr-sm-2.ser.lang").css('borderColor','#ccc');
//            $("i#search").css('background','transparent');  

  });
    
    
    
    
    
    
    
    
    
    
    
    
    
    });/********END OF DOCUMENT READY FYNCTION*****************/