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


$(window).resize(function(){
  if (window.innerWidth > 1024) {
    mousewheelE()
  } else {
    moSwiperE()
  }
  }).resize();



function mousewheelE(){
  var product_swiper = new Swiper(".product_swiper01", {
    direction: "vertical",
    mousewheel: false,
    observer : true,
    observeParents : true,
    scrollbar: {
      el: ".product_swiper01 .swiper-scrollbar",
      hide: false,
    }
  });
  var product_swiper02 = new Swiper(".product_swiper02", {
    direction: "vertical",
    mousewheel: true,
    observer : true,
    observeParents : true,
    scrollbar: {
      el: ".product_swiper02 .swiper-scrollbar",
      hide: false,
    },
  });
  var product_swiper03 = new Swiper(".product_swiper03", {
    direction: "vertical",
    mousewheel: true,
    observer : true,
    observeParents : true,
    scrollbar: {
      el: ".product_swiper03 .swiper-scrollbar",
      hide: false,
    },
    on: {
      slideChangeTransitionEnd: function(){
        if(this.activeIndex == 1){
          $('.sec_item').addClass('change')
        }else {
          $('.sec_item').removeClass('change')
        }
      }
    }
  });


  $(window).on('wheel DOMMouseScroll', function () {
    var menu_h = document.querySelector("#header").clientHeight
      $('.sec01_01').on('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          product_swiper.mousewheel.disable()
          $('html').stop().animate({ scrollTop: $('.section_visual').offset().top - menu_h}, 600);
        }else {
          product_swiper.mousewheel.enable()
        }
      })
      $('.sec01_03').on('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          product_swiper.mousewheel.enable()

        }else {
          $('html').stop().animate({ scrollTop: $('.product02_sec').offset().top}, 600);
          product_swiper.slideTo(0, 500, false)
          product_swiper.mousewheel.disable()
        }
      })
      $('.sec02_01').on('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          product_swiper02.mousewheel.disable()
          $('html').stop().animate({ scrollTop: $('.product01_sec').offset().top  - menu_h}, 600);
        }else {
          product_swiper02.mousewheel.enable()
        }
      })
      $('.sec02_02').on('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          product_swiper02.mousewheel.enable()

        }else {
          $('html').stop().animate({ scrollTop: $('.product03_sec').offset().top}, 600);
          product_swiper02.slideTo(0, 500, false)
          product_swiper02.mousewheel.disable()
        }
      })
      $('.sec03_01').on('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          product_swiper03.mousewheel.disable()
          $('html').stop().animate({ scrollTop: $('.product02_sec').offset().top  - menu_h}, 600);
        }else {
          product_swiper03.mousewheel.enable()
        }
      })
      $('.sec03_02').on('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          product_swiper03.mousewheel.enable()
        }else {
          $('html').stop().animate({ scrollTop: $('.partner_sec').offset().top}, 600);
          product_swiper03.slideTo(0, 500, false)
          product_swiper03.mousewheel.disable()
        }
      })

      $(".section_visual").on('wheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
          $('html').stop().animate({ scrollTop: $('.product01_sec').offset().top }, 400);
        }
      });
      $(".partner_sec").on('wheel DOMMouseScroll', function (event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
          $('html').stop().animate({ scrollTop: $('.product03_sec').offset().top - menu_h}, 400);
        }
      });
  })
}

function moSwiperE(){
  var product_swiper = new Swiper(".product_swiper01", {
    direction: "vertical",
    loop: true,
    observer : true,
    observeParents : true,
    touchRatio: 0,
    scrollbar: {
      el: ".product_swiper01 .swiper-scrollbar",
      hide: false,
    },
    navigation: {
      nextEl: ".product01_sec .swiper-button-next",
      prevEl: ".product01_sec .swiper-button-prev",
    },
  });
  var product_swiper02 = new Swiper(".product_swiper02", {
    direction: "vertical",
    loop: true,
    observer : true,
    observeParents : true,
    touchRatio: 0,
    scrollbar: {
      el: ".product_swiper02 .swiper-scrollbar",
      hide: false,
    },
    navigation: {
      nextEl: ".product02_sec .swiper-button-next",
      prevEl: ".product02_sec .swiper-button-prev",
    },
  });
  var product_swiper03 = new Swiper(".product_swiper03", {
    direction: "vertical",
    loop: true,
    observer : true,
    observeParents : true,
    touchRatio: 0,
    scrollbar: {
      el: ".product_swiper03 .swiper-scrollbar",
      hide: false,
    },
    navigation: {
      nextEl: ".product03_sec .swiper-button-next",
      prevEl: ".product03_sec .swiper-button-prev",
    },
    on: {
      slideChangeTransitionEnd: function(){
        if(this.activeIndex == 1){
          $('.sec_item').addClass('change')
        }else {
          $('.sec_item').removeClass('change')
        }
      }
    }
  });
}


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

