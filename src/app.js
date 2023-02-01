AOS.init({
  once: true
});

const button = document.getElementById('back-to-top');

function toTheTop() {
  window.scrollTo(0, 0);
};

button.addEventListener('click', toTheTop);

document.getElementsByTagName('body')[0].onscroll = function () {
  if (window.pageYOffset > 250) {
    button.style = 'display:block';
    // button.classList.add('back-to-top');
    // button.classList.remove('back-to-top-hide');
  } else {
    button.style = 'display:none';
    // button.classList.add('back-to-top-hide');
    // button.classList.remove('back-to-top');
  };
};
