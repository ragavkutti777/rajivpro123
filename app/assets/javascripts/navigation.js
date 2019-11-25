$(document).on('turbolinks:load', function(){
  var mobile_menu_icon = $(".nav-mobile");
  var mobile_menu = $(".nav-menu");

  int_nav_menu_height();

  mobile_menu_icon.click(function () {
    if (!($(this).hasClass('active'))) {
      mobile_menu_icon.addClass('active');
      mobile_menu.addClass('active');
    }
    else if ($(this).hasClass('active')) {
      mobile_menu_icon.removeClass('active');
      mobile_menu.removeClass('active');
    }
  });

  $('ul.nav-menu-inner').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    $('html, body').animate({ scrollTop: $anchor.top },1500);
    return false;
  });

  $(window).resize(function () {
      int_nav_menu_height();
  });

  // Mobile menu max height
  function int_nav_menu_height() {
      var mobile_menu = $(".nav-menu");
      mobile_menu.css("max-height", $(window).height() - $(".header").height() + 200 + "px"), $(window).width() <= 1024 ? $(".header").addClass("mobile-device") : $(window).width() > 1024 && ($(".header").removeClass("mobile-device"))
  };

});

