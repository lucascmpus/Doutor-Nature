AOS.init({
  once: true
});

const button = document.getElementById('back-to-top');
const faqs = document.querySelectorAll('.question');

function toTheTop() {
  window.scrollTo(0, 0);
};

button.addEventListener('click', toTheTop);

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  });
})

document.getElementsByTagName('body')[0].onscroll = function () {
  if (window.pageYOffset > 250) {
    button.style = 'display:block';
  } else {
    button.style = 'display:none';
  };
};
