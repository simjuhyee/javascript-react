$(document).ready(function () {
  modal();
  menuE();
  headerE()
});

// mo version menu event
function menuE() {
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
  $('.contact_modal').on('click', function (e) {
    if (e.target.className == 'filter' || e.target.className == 'modal_btn') {
      $(".contact_modal").removeClass('show')
    }
    e.preventDefault();
  })

}

function headerE() {
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
