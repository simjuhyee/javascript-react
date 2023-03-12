$(document).ready(function () {
    menu_open();
    menu_close()
  
  });
  
  // mo version menu event
  function menu_open() {
    $(".sitemap_btn").on("click", function () {
      $("#mo_gnb").addClass("on");
      $(".mo_menu").animate({ right: "0" })
    });
  }
  function menu_close() {
    $(".close_btn").on("click", function () {
      $("#mo_gnb").removeClass("on");
      $(".mo_menu").animate({ right: "-100%" })
    });
  }
  
  

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
  }


//aos script
AOS.init({
    duration: 1300,
  });
  