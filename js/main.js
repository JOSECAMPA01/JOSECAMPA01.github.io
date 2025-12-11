// Carrusel original
const trackOriginal = document.querySelector('.carousel-track');
const slidesOriginal = Array.from(document.querySelectorAll('.slide'));
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let indexOriginal = 0;

function showSlideOriginal(i) {
  if (i < 0) indexOriginal = slidesOriginal.length - 1;
  else if (i >= slidesOriginal.length) indexOriginal = 0;
  else indexOriginal = i;

  const slideWidth = slidesOriginal[0].getBoundingClientRect().width;
  trackOriginal.style.transform = `translateX(-${indexOriginal * slideWidth}px)`;
}

leftArrow.addEventListener('click', () => showSlideOriginal(indexOriginal - 1));
rightArrow.addEventListener('click', () => showSlideOriginal(indexOriginal + 1));
window.addEventListener('resize', () => showSlideOriginal(indexOriginal));
showSlideOriginal(indexOriginal);





const trackNuevo = document.querySelector('.trackNuevo');
const slidesNuevo = Array.from(trackNuevo.children);
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
let indexNuevo = 0;

function actualizarCarrusel() {
  const slideWidth = slidesNuevo[0].offsetWidth; // ancho del slide (120vw)
  trackNuevo.style.transform = `translateX(-${indexNuevo * slideWidth}px)`;
}

btnLeft.addEventListener('click', () => {
  indexNuevo = (indexNuevo > 0) ? indexNuevo - 1 : slidesNuevo.length - 1;
  actualizarCarrusel();
});

btnRight.addEventListener('click', () => {
  indexNuevo = (indexNuevo < slidesNuevo.length - 1) ? indexNuevo + 1 : 0;
  actualizarCarrusel();
});

window.addEventListener('resize', actualizarCarrusel);
actualizarCarrusel();


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const btn = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');
  const icon = faq.querySelector('.icon');

  btn.addEventListener('click', () => {

    // Cerrar los demás
    faqs.forEach(other => {
      if (other !== faq) {
        other.querySelector('.faq-answer').classList.remove('show');
        other.querySelector('.icon').textContent = "+";
      }
    });

    // Alternar el actual
    answer.classList.toggle('show');
    icon.textContent = answer.classList.contains('show') ? "−" : "+";
  });
});
