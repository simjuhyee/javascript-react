$(document).ready(function () {
  prevent_a();
  menu_open();
  menu_close()
  accordion()
});

// 상단 앵커 event
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
  // anc add class on
  $(window).on('scroll', function(){
    for(let i = 0; i < 4; i++){
      var menu_h = document.querySelector("#header").clientHeight
      if($(window).scrollTop() + (menu_h * 2) >= $('.anc').eq(i).offset().top){
        $('.menu > li').eq(i).children().addClass('on')
        $('.menu > li').eq(i).siblings().children().removeClass('on')
      }
     }

     var pos = $(this).scrollTop();
     if (pos > 0) {
        $("#header").addClass("fixed");
        return false;
     } else {
        $("#header").removeClass("fixed");
     }
  })
}

// mo version menu event
function menu_open() {
  $(".sitemap_btn").on("click", function () {
    $("#mo_gnb").addClass("on");
    $(".mo_menu").animate({right: "0"})
  });
}
function menu_close() {
  $(".close_btn").on("click", function () {
    $("#mo_gnb").removeClass("on");
    $(".mo_menu").animate({right: "-100%"})
  });
}


var visual_swiper = new Swiper(".visual_swiper", {
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

var main_swiper = new Swiper(".main_swiper", {
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


var ww = $(window).width();
var mSwiper = undefined;
function initSwiper() {
  if (ww < 980 && mSwiper == undefined) {
    mSwiper =  new Swiper(".profile_swiper", {
          slidesPerView: 1.5,
          spaceBetween: 30,
          loop: true,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
  } else if (ww >= 980 && mSwiper != undefined) {
    mSwiper.destroy();
    mSwiper = undefined;
  }
}
initSwiper();
$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
});

//aos script
AOS.init({
  duration: 1300,
});

//faq accordion event
function accordion(){
  $(".item_head").on('click', function(e){
    $(this).toggleClass('on')
    var itemBody = $(this).next();
    if($(this).hasClass('on')){
      itemBody.addClass('on')
    }else {
      itemBody.removeClass('on')
    }
    e.preventDefault();
  })
}