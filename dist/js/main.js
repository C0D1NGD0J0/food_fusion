$(window).on("load", function () {
  const t2 = new TimelineMax({ paused: false })
  let splitText = new SplitText(".headline");
  let splitText2 = new SplitText(".sub-headline");
  t2.from('body', 2, {opacity: 0, ease: Expo.easeInOut})
  t2.staggerFrom(splitText.chars, .3, { opacity: 0, y: -100, ease: Power1.easeIn }, .2)
  t2.staggerFrom(splitText2.words, .5, { opacity: 0, y: 100, ease: Power2.easeIn }, .2)
  t2.from(".hero-content__cta", 1, {opacity: 0});
});

//$(function(){
//  $(".link-item1").hover(function(){
//    $(".bg1").fadeIn(600);
//  }, function(){
//      $(".bg1").fadeOut(600);
//  });

//  $(".link-item2").hover(function () {
//    $(".bg2").fadeIn(600);
//  }, function () {
//    $(".bg2").fadeOut(600);
//  });

//  $(".link-item3").hover(function () {
//    $(".bg3").fadeIn(600);
//  }, function () {
//    $(".bg3").fadeOut(600);
//  });

//  $(".link-item4").hover(function () {
//    $(".bg4").fadeIn(600);
//  }, function () {
//    $(".bg4").fadeOut(600);
//  });

//  $(".link-item5").hover(function () {
//    $(".bg5").fadeIn(600);
//  }, function () {
//    $(".bg5").fadeOut(600);
//  });

//  const t1 = new TimelineMax({paused: true});
//  t1.to(".navbar-menu", 1, {left: '8rem', ease: Expo.easeInOut}, "-=.4");
//  t1.staggerFrom(".navbar-menu__links li", 1, {y: 20, opacity: 0, ease: Expo.easeInOut}, 0.1);
//  t1.to(".navbar-menu__images", 1, {left: '52rem', ease: Expo.easeInOut, delay: -1}, "-=1");
//  t1.reverse();

//  $(document).on('click', ".navbar-icon", function(){
//    t1.reversed(!t1.reversed());
//  });
//});