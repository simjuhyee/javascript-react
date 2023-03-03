$(document).ready(function () {
  prevent_a();
  mOpen();
});
function prevent_a() {
  $(document).on("click", 'a[href^="#"]', function (e) {
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
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
}

function mOpen() {
  $(".sitemap").on("click", function () {
    $("#menuArea").addClass("on");
  });
}

function mClose() {
  $(".btnMenu_mClose").on("click", function () {
    $("#menuArea").removeClass("on");
  });
}

// Header Fixed
$(window).scroll(function () {
  var top = $(this).scrollTop();
  if (top > 0) {
    headerFixed();
  } else {
    headerTop();
  }
});

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

var swiper = new Swiper(".aboutUs-swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("animate");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});

AOS.init({
  duration: 1200,
  delay: 500,
});
