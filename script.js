$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Animation for scrolling into view
    $(window).scroll(function() {
      $('.shoe').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).height();
        var top_of_screen = $(window).scrollTop();
  
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          $(this).addClass('animate__fadeInUp');
        } else {
          $(this).removeClass('animate__fadeInUp');
        }
      });
    });
  });
  