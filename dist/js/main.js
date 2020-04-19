$(window).on("load", function () {
  const t2 = new TimelineMax({ paused: false })
  let splitText = new SplitText(".headline");
  let splitText2 = new SplitText(".sub-headline");
  t2.from('body', 2, {opacity: 0, ease: Expo.easeInOut})
  .staggerFrom(splitText.chars, 1, { opacity: 0, y: -100, ease: Power1.easeIn }, .2)
  .staggerFrom(splitText2.words, .5, { opacity: 0, x: 10, ease: Power2.easeIn }, .2)
  .from(".hero-content__cta", 1, {opacity: 0});

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
  t1.to(".navbar-menu", 1, {left: '8rem', ease: Expo.easeInOut}, "-=.4")
  .staggerFrom(".navbar-menu__links li", 1, {y: 20, opacity: 0, ease: Expo.easeInOut}, 0.1)
  .to(".navbar-menu__images", 1, {left: '46rem', ease: Expo.easeInOut, delay: -1}, "-=1");
  t1.reverse();

  $(document).on('click', ".navbar-icon", function(){
    t1.reversed(!t1.reversed());
  });

  const controller = new ScrollMagic.Controller();
  const t3 = new TimelineMax({ paused: false });
  
  t3.from('#aboutus', 2, {opacity: 0 })
    .staggerFrom(".workhours__card", 1, { x: -50, opacity: 0, ease: Linear.easeIn }, 0.2);

  const scene = new ScrollMagic.Scene({
    triggerElement: "#aboutus"
  }).setTween(t3).addTo(controller);
});