const btnGoUp = document.querySelector('.go-up');

function goToTop() {
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    if (scrollPos >= 400) {
      btnGoUp.classList.add('show');
    } else {
      btnGoUp.classList.remove('show');
    }
  });
}
export default goToTop;
