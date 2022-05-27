window.addEventListener("load", () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
});

$(document).ready(function(){

  $(".tabs").click(function(){
    const targetEl = $(this).attr("data-target");
    $(".tabs").removeClass("active");
    $(this).addClass("active");

    $(".target").removeClass("active");
    $(`#${targetEl}`).addClass("active");

  });

  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 0,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

})