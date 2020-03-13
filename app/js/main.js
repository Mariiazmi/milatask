$(function(){
    $('.feedback__testimonials').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
      });

    $('.brands__inner').slick({
        arrows: true,
        slidesToShow: 4,
        dots: false,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
      });

    $('.header__nav-burger').on('click', function(){
        $('.header__nav').slideToggle();
      });

    new WOW().init();
    
    var mixer = mixitup('.portfolio__inner');
});