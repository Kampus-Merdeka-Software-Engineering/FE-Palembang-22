$(function () {
  "use strict";
  
  var slider          = $('.slider'),
      sliderUl        = slider.find('.slider-parent'),
      sliderUlLi      = sliderUl.find('.images-list'),
      sliderOl        = slider.find('.buttom-circles'),
      sliderOlLi      = sliderOl.find('.buttom-circles-list'),
      sliderFaRight   = slider.find('> .fa:first-of-type'),
      sliderFaLeft    = slider.find('> .fa:last-of-type'),
      sliderTime      = 1000,
      sliderWait      = 2000,
      sliderSetInt,
      resumeAndPause;
  
  sliderFaLeft.fadeOut();
  

function resetWH() {
      slider.width(slider.parent().width()).height(slider.parent().width() * 0.5);
      sliderUl.width(slider.width() * sliderUlLi.length).height(slider.height());
      sliderUlLi.width(slider.width()).height(slider.height());
  }
  resetWH();

function runSlider() {
      if (sliderOlLi.hasClass('slider-active')) {
          sliderUl.animate({
              marginLeft: -slider.width() * ($('.slider-active').data('slider') - 1)
          }, sliderTime);
      }
      if ($('.slider-active').is(':first-of-type')) {
          sliderFaLeft.fadeOut();
      } else {
          sliderFaLeft.fadeIn();
      }
      if ($('.slider-active').next().is(':last-of-type')) {
          sliderFaRight.fadeOut();
      } else {
          sliderFaRight.fadeIn();
      }
  }

function runRight() {
      slider.each(function () {
          $('.slider-active').next().addClass('slider-active').siblings().removeClass('slider-active');
          runSlider();
      });
  }

function runLeft() {
      slider.each(function () {
          $('.slider-active').prev().addClass('slider-active').siblings().removeClass('slider-active');
          runSlider();
      });
  }

sliderSetInt = function autoRunSlider() {
      if ($('.slider-active').next().is(':last-of-type')) {
          sliderUl.animate({
              marginLeft: -sliderUlLi.width() * $('.slider-active').data('slider')
          }, sliderTime, function () {
              sliderUl.css('margin-left', 0);
              sliderOlLi.first().addClass('slider-active').siblings().removeClass('slider-active');
          });
      } else {
          runRight();
      }
  };
  
  resumeAndPause = setInterval(sliderSetInt, sliderWait);
  

$(window).on('resize', function () {
      resetWH();
  });
  

slider.each(function () {
      sliderOlLi.click(function () {
          $(this).addClass('slider-active').siblings().removeClass('slider-active');
          runSlider();
      });
  });
  
  sliderFaRight.on('click', function () {
      runRight();
  });
  sliderFaLeft.on('click', function () {
      runLeft();
  });
  
  slider.find('.fa').hover(function () {
      clearInterval(resumeAndPause);
  }, function () {
      resumeAndPause = setInterval(sliderSetInt, sliderWait);
  });
});







$(function(){
    // vars for testimonials carousel
    var $txtcarousel = $('#testimonial-list');
    var txtcount = $txtcarousel.children().length;
    var wrapwidth = (txtcount * 415) + 415; // 400px width for each testimonial item
    $txtcarousel.css('width',wrapwidth);
    var animtime = 750; // milliseconds for clients carousel
   
    // prev & next btns for testimonials
    $('#prv-testimonial').on('click', function(){
      var $last = $('#testimonial-list li:last');
      $last.remove().css({ 'margin-left': '-415px' });
      $('#testimonial-list li:first').before($last);
      $last.animate({ 'margin-left': '0px' }, animtime); 
    });
    
    $('#nxt-testimonial').on('click', function(){
      var $first = $('#testimonial-list li:first');
      $first.animate({ 'margin-left': '-415px' }, animtime, function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#testimonial-list li:last').after($first);
      });  
    });
  

    var $clientcarousel = $('#clients-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 140); 
    $clientcarousel.css('width',clientwidth);
    
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    
    $(document).on({
      mouseenter: function(){
        rotating = false;
      },
      mouseleave: function(){
        rotating = true;
      }
    }, '#clients');
    
    function rotateClients() {
      if(rotating != false) {
        var $first = $('#clients-list li:first');
        $first.animate({ 'margin-left': '-140px' }, 600, function() {
          $first.remove().css({ 'margin-left': '0px' });
          $('#clients-list li:last').after($first);
        });
      }
    }
  });


  $('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  
  //LOADING SCROLL
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

// SCROLL ATAS
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 100) {
toTop.classList.add("active");
} else {
toTop.classList.remove("active");
}
})