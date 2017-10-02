import sayHello from './lib/sayHello.js';

sayHello();

import 'slick-carousel';

$('.js-gallery').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
