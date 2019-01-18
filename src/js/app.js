import menuMobile from './menuMobile';
import scrollUp from './scrollUp';

require('webpack-jquery-ui');
require('webpack-jquery-ui/accordion');

$('#accordion').accordion();
goToUp();
menuMobile();


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
