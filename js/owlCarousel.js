$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    center: true,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        margin: 20,
        items: 2,
      },
      1024:{
        items: 3,
      }
    },
  });
});

