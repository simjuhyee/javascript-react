$(document).ready(function () {
  prevent_a();
  mOpen();
  mClose()
});



function prevent_a() {
  $(document).on("click", 'a[href^="#"]', function (e) {
    var target = this.hash;
    var $target = $(target);
    var menu_h = document.querySelector("#header").clientHeight
    
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - menu_h,
        },
        600,
        "linear",
        function () {
          window.location.replace.hash = target;
        }
      );
    e.preventDefault();
    return false;
  });

  $(window).on('scroll', function(){
    
    for(let i = 0; i < 4; i++){
      if($(window).scrollTop() >= $('.section').eq(i).offset().top){
        $('.menu > li').eq(i).children().addClass('on')
        $('.menu > li').eq(i).siblings().children().removeClass('on')
      }
     }

     var pos = $(this).scrollTop();
     if (pos > 0) {
       headerFixed();
     } else {
       headerTop();
     }
  })
}


function mOpen() {
  $(".sitemap").on("click", function () {
    $("#menuArea").addClass("on");
    $(".menuList").animate({right: "0"})
  });
}

function mClose() {
  $(".btnMenu_mClose").on("click", function () {
    $("#menuArea").removeClass("on");
    $(".menuList").animate({right: "-100%"})
  });
}


function headerFixed() {
  var header = $("#header");
  $(header).addClass("fixed");
  return false;
}

function headerTop() {
  var header = $("#header");
  $(header).removeClass("fixed");
  return false;
}
// Header Fixed

var swiper = new Swiper(".visual_swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".visual_swiper .swiper-button-next",
    prevEl: ".visual_swiper .swiper-button-prev",
  },
  on: {
    init: function () {
      $(".visual_swiper .swiper-progress-bar").removeClass("animate");
      $(".visual_swiper .swiper-progress-bar").removeClass("active");
      $(".visual_swiper .swiper-progress-bar").eq(0).addClass("animate");
      $(".visual_swiper .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".visual_swiper .swiper-progress-bar").removeClass("animate");
      $(".visual_swiper .swiper-progress-bar").removeClass("active");
      $(".visual_swiper .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".visual_swiper .swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});


var swiper = new Swiper(".main_swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".main_swiper .swiper-button-next",
    prevEl: ".main_swiper .swiper-button-prev",
  },
  on: {
    init: function () {
      $(".main_swiper .swiper-progress-bar").removeClass("animate");
      $(".main_swiper .swiper-progress-bar").removeClass("active");
      $(".main_swiper .swiper-progress-bar").eq(0).addClass("animate");
      $(".main_swiper .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".main_swiper .swiper-progress-bar").removeClass("animate");
      $(".main_swiper .swiper-progress-bar").removeClass("active");
      $(".main_swiper .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".main_swiper .swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});

AOS.init({
  duration: 1200,
  delay: 500,
});



