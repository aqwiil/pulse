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
});