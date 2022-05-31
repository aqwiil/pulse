// let answer = confirm("Вам есть 18?");
// if (answer) {
//    console.log('Hi')
// } else {
//    console.log('Back')
// }

$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1000,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/icons/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/slider/icons/chevron-right-solid.png"></button>',
      responsive: [
         {
            breakpoint: 768,
            settings: {
            }
         }
      ]
   });
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };

   toggleSlide('.catalog-item__back');
   toggleSlide('.catalog-item__link');

   // modal

   $('[data-modal=consultation]').on('click', function () {
      $('.overley, #consultation').fadeIn('fast');
   });
   $('.modal__close').on('click', function () {
      $('.overley, #consultation, #thanks, #order').fadeOut('slow');
   });

   $('.catalog-item__btn').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overley, #order').fadeIn('fast');
      })
   });
   function valideForms(form) {
      $(form).validate({
         rules: {
            name: "required",
            phone: "required",
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер",
            email: {
               required: "Введите ваш эмейл",
               email: "Неправильно введен эмейл"
            }
         }
      })
   };
   valideForms('#consultation-form');
   valideForms('#consultation form');
   valideForms('#order form');
});

