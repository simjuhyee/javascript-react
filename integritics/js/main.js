$(document).ready(function () {
  prevent_a();
  accordion();
});

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

var product_swiper = new Swiper(".product_swiper01", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: ".product_swiper01 .swiper-scrollbar",
    hide: false,
  },
  watchOverflow : true,
  on: {
      slideChange: function() {
          setTimeout(function () {
            product_swiper.params.touchReleaseOnEdges = false;
            product_swiper.params.mousewheel.releaseOnEdges = false;
          });
      },
      reachEnd: function() {
          setTimeout(function () {
            product_swiper.params.touchReleaseOnEdges = true;
            product_swiper.params.mousewheel.releaseOnEdges = true;
          }, 0);
          setTimeout(function () {
          $(".product_swiper01 .swiper-slide03").bind('wheel DOMMouseScroll', function (event) {
            if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
              $('html').animate({ scrollTop: $('.product02_sec').offset().top }, 400);
            }
          });
        }, 100);
      },
      reachBeginning: function() {
          setTimeout(function () {
            product_swiper.params.touchReleaseOnEdges = true;
            product_swiper.params.mousewheel.releaseOnEdges = true;
          }, 500);
      }
  }
});
var product_swiper02 = new Swiper(".product_swiper02", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: ".product_swiper02 .swiper-scrollbar",
    hide: false,
  },
  watchOverflow : true,
  on: {
      slideChange: function() {
          setTimeout(function () {
            product_swiper02.params.touchReleaseOnEdges = false;
            product_swiper02.params.mousewheel.releaseOnEdges = false;
          });
      },
      reachEnd: function() {
          setTimeout(function () {
            product_swiper02.params.touchReleaseOnEdges = true;
            product_swiper02.params.mousewheel.releaseOnEdges = true;
          }, 0);
          setTimeout(function () {
          $(".product_swiper02 .swiper-slide02").bind('wheel DOMMouseScroll', function (event) {
            if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
              $('html').animate({ scrollTop: $('.product03_sec').offset().top }, 400);
            }
          });
        }, 100);
      },
      reachBeginning: function() {
          setTimeout(function () {
            product_swiper02.params.touchReleaseOnEdges = true;
            product_swiper02.params.mousewheel.releaseOnEdges = true;
          }, 500);
      }
  }
});
var product_swiper03 = new Swiper(".product_swiper03", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: ".product_swiper03 .swiper-scrollbar",
    hide: false,
  },
  watchOverflow : true,
  on: {
      slideChange: function() {
          setTimeout(function () {
            product_swiper03.params.touchReleaseOnEdges = false;
            product_swiper03.params.mousewheel.releaseOnEdges = false;
          });
      },
      reachEnd: function() {
          setTimeout(function () {
            product_swiper03.params.touchReleaseOnEdges = true;
            product_swiper03.params.mousewheel.releaseOnEdges = true;
          },0 );
          setTimeout(function () {
          $(".product_swiper03 .swiper-slide02").bind('wheel DOMMouseScroll', function (event) {
            if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
              $('html').animate({ scrollTop: $('.partner_sec').offset().top }, 400);
            }
          });
        }, 100);
      },
      reachBeginning: function() {
          setTimeout(function () {
            product_swiper03.params.touchReleaseOnEdges = true;
            product_swiper03.params.mousewheel.releaseOnEdges = true;
          }, 500);
      }
  }
});
var menu_h = document.querySelector("#header").clientHeight
$(".product_swiper01 .swiper-slide01.swiper-slide-active").bind('wheel DOMMouseScroll', function (event) {
  if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
    $('html').animate({ scrollTop: $('.section_visual').offset().top - menu_h}, 400);
  }
});
$(".product_swiper02 .swiper-slide01.swiper-slide-active").bind('wheel DOMMouseScroll', function (event) {
  if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
    $('html').animate({ scrollTop: $('.product_swiper01').offset().top - menu_h}, 400);
  }
});
$(".product_swiper03 .swiper-slide01.swiper-slide-active").bind('wheel DOMMouseScroll', function (event) {
  if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
    $('html').animate({ scrollTop: $('.product_swiper02').offset().top - menu_h }, 400);
  }
});



function prevent_a() {
  var header = $('#header')
  $(window).bind('wheel DOMMouseScroll', function (event) {
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
      header.addClass('fixed')
      if (event.originalEvent.wheelDelta >= 0) {
        header.addClass('scroll')
      } else {
        header.removeClass('scroll')
      }
    } else {
      header.removeClass('scroll')
      header.removeClass('fixed')
    }
  });
}

$(".section_visual").on('wheel DOMMouseScroll', function (event) {
  if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
    $('html').animate({ scrollTop: $('.product01_sec').offset().top }, 400);
    $('#header').addClass('fixed');
  }
});



//faq accordion event
function accordion() {
  $(".item_head").on('click', function (e) {
    $(this).toggleClass('on')
    var itemBody = $(this).next();
    if ($(this).hasClass('on')) {
      itemBody.addClass('on')
    } else {
      itemBody.removeClass('on')
    }
    e.preventDefault();
  })
}
