function ibg() {
   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();
$('.wrapper').addClass('loaded');
$('.header__burger').click(function (event) {
   $(this).toggleClass('active');
   $('.header__list').toggleClass('active')
   $('.nav__1').toggleClass('active');
   $('body').toggleClass('lock')
});
$(document).ready(function () {
   $('.slider__container').slick({
      centerMode: true,
      variableWidth: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false
   });
   $('.profile__photo').slick({
      centerMode: true,
      infinite: true,
      asNavFor: '.profile__info',
      slidesToShow: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,

            }
         }
      ]
   });
   $('.profile__info').slick({
      centerMode: true,
      asNavFor: '.profile__photo',
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: false,
      cssEase: 'linear'

   });
});

$(document).ready(function () {
   $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });
});

