

// Main Slider
$('.slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsiveClass: true,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
})


// Video Control

const vid = document.getElementById("video"); 
const play = document.querySelector('.play-container');
const pause = document.querySelector('.pause-video');
function playVid() { 
  vid.play(); 
  play.classList.add("paused");
  pause.classList.remove("active-pause");
} 

function pauseVid() { 
  vid.pause(); 
  play.classList.remove("paused");
  pause.classList.add("active-pause");
} 

vid.onended = function() {
    play.classList.remove("paused");
  pause.classList.add("active-pause");
};


// Mobile Menu


function openNav() {

  setTimeout(function() {
      $('.mobile-menu').css({
          right: '0px'
      });
  }, 0);
  
  $('html').css({
      overflow: 'hidden',
      height: '100%'
  });
  
  $('.blackscreen').css({
      width: '100%',
      opacity: '1'
  });
  
  }
  
  function closeNav() {
  
  setTimeout(function() {
      $('.mobile-menu').css({
          right: '-350px'
  
      });
  }, 0);
  
  $('html').css({
      overflow: 'visible',
      height: '100%'
  });
  
  $('.blackscreen').css({
  
      opacity: '0'
  });
  
  setTimeout(function() {
  
      $('.blackscreen').css({
          width: '0',
      });
  
  }, 500);
  
  }
  
  $('.blackscreen').click(function() {
  
  $(this).css({
  
      opacity: '0',
      width: '0'
  });

  $('.mobile-menu').css({
      right: '-350px',
  
  });
  
  $('html').css({
      overflow: 'visible',
      height: '100%'
  });
  
  });