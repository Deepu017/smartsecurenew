$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $('.navlogo').addClass('scrolled');
    } else {
      $('.navlogo').removeClass('scrolled');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.navfix').addClass('scrolled');
    } else {
      $('.navfix').removeClass('scrolled');
    }
  });

  $(document).ready(function(){
      $(".testimonial-carousel").owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsive:{
              0:{
                  items: 1
              },
              768:{
                  items: 2
              },
              992:{
                  items: 3
              }
          }
      });
  });


  function animateCounter(element, target) {
    let start = 0;
    const duration = 2000; // Animation duration in milliseconds
    const step = ts => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        element.innerHTML = Math.floor(progress * target);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function checkScroll() {
    const elements = document.querySelectorAll('.counter-up');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !element.classList.contains('counted')) {
            element.classList.add('counted');
            animateCounter(element, parseInt(element.innerHTML));
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);