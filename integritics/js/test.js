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
});

function prevent_a() {
  var header = $('#header')
  $(window).bind('mousewheel DOMMouseScroll', function (event) {
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
  $(window).bind('mousewheel DOMMouseScroll', function () {
    if ($('.product_swiper01 .swiper-slide04').hasClass('swiper-slide-active')) {
      $('html').animate({ scrollTop: $('.product02_sec').offset().top }, 400);
      product_swiper.slideTo(0, 400, false)
    } else if ($('.product_swiper02 .swiper-slide03').hasClass('swiper-slide-active')) {
      $('html').animate({ scrollTop: $('.product03_sec').offset().top }, 400);
      product_swiper02.slideTo(0, 400, false)
    } else if ($('.product_swiper03 .swiper-slide03').hasClass('swiper-slide-active')) {
      $('html').animate({ scrollTop: $('.partner_sec').offset().top }, 400);
      product_swiper03.slideTo(0, 400, false)
    }
  });
}

$(".section_visual").on('mousewheel DOMMouseScroll', function (e) {
  if (e.originalEvent.wheelDelta < 0) {
    $('html').animate({ scrollTop: $('.product01_sec').offset().top }, 400);
    $('#header').addClass('fixed');
  }
});

if ($(".product01_sec .swiper-slide01").hasClass('swiper-slide-active')) {
  $(this).on('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $('.product01_sec .emptybox').show()
    } else if (e.originalEvent.wheelDelta < 0) {
      $('.product01_sec .emptybox').hide()
    }
  })
}

if ($(".product02_sec .swiper-slide01").hasClass('swiper-slide-active')) {
  $(this).on('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $('.product02_sec .emptybox').show()
    } else if (e.originalEvent.wheelDelta < 0) {
      $('.product02_sec .emptybox').hide()
    }
  })
}

if ($(".product03_sec .swiper-slide01").hasClass('swiper-slide-active')) {
  $(this).on('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $('.product03_sec .emptybox').show()
    } else if (e.originalEvent.wheelDelta < 0) {
      $('.product03_sec .emptybox').hide()
    }
  })
}


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