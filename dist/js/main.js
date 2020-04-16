$(function(){
  $(".link-item1").hover(function(){
    $(".bg1").fadeIn(600);
  }, function(){
      $(".bg1").fadeOut(600);
  });

  $(".link-item2").hover(function () {
    $(".bg2").fadeIn(600);
  }, function () {
    $(".bg2").fadeOut(600);
  });

  $(".link-item3").hover(function () {
    $(".bg3").fadeIn(600);
  }, function () {
    $(".bg3").fadeOut(600);
  });

  $(".link-item4").hover(function () {
    $(".bg4").fadeIn(600);
  }, function () {
    $(".bg4").fadeOut(600);
  });

  $(".link-item5").hover(function () {
    $(".bg5").fadeIn(600);
  }, function () {
    $(".bg5").fadeOut(600);
  });

  const t1 = new TimelineMax({paused: true});
  //t1.to("#main", 1, {display: 'none', zIndex: '-1'});
  t1.to(".navbar-menu", 1, {left: '8rem', ease: Expo.easeInOut}, "-=1");
  t1.staggerFrom(".navbar-menu__links li", 2, {y: 20, opacity: 0, ease: Expo.easeInOut}, 0.1);
  t1.to(".navbar-menu__images", 2, {left: '52rem', ease: Expo.easeInOut, delay: -3}, "-=1");
  t1.reverse();

  $(document).on('click', ".navbar-icon", function(){
    t1.reversed(!t1.reversed());
  });
});