$(document).ready(function () {
    modal();
    menu();
    prevent_a()
  });

  // mo version menu event
  function menu() {
    $(".sitemap_btn").on("click", function () {
      $("#mo_gnb").addClass("on");
      $(".mo_menu").animate({ right: "0" })
      $(".close_btn").on("click", function () {
        $("#mo_gnb").removeClass("on");
        $(".mo_menu").animate({ right: "-100%" })
      });
    });
  }


  function modal() {
    $("a.contact").on("click", function (e) {
      $(".contact_modal").addClass('show')
      e.preventDefault();
    });
    $('.contact_modal').on('click', function(e){
      if(e.target.className == 'filter' || e.target.className == 'modal_btn'){
        $(".contact_modal").removeClass('show')
      }
    })

  }



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


//aos script
AOS.init({
    duration: 1300,
  });
