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

  $('.sub_list').on('click', function(e){
    $(this).next().slideToggle(300);
    e.preventDefault();
  })
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
  $(window).on('wheel DOMMouseScroll', function (event) {
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


  $(document).on('touchstart', function (e){
    ts = e.originalEvent.touches[0].clientY;
  });

  $(document).on('touchend', function (e){
    var scroll = $(window).scrollTop();
    var te = e.originalEvent.changedTouches[0].clientY;

    if (scroll > 0){
      header.addClass('fixed')
      if(ts > te+5){
        header.removeClass('scroll')
      }else if(ts < te-5){
        header.addClass('scroll')
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
