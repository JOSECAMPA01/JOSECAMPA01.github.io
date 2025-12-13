 // MENU MOBILE
  document.getElementById('menuToggle').onclick = () => {
    document.querySelector('.nav').classList.toggle('active');
  };

  // BOTÓN DE IDIOMA (placeholder)
  document.getElementById('langToggle').onclick = () => {
    alert('Aquí conectas el cambio de idioma 🇺🇸');
  };

  
const industriesBtn = document.getElementById('industriesBtn');
const industriesDropdown = document.getElementById('industriesDropdown');

// Desktop hover
industriesBtn.addEventListener('mouseenter', () => {
  industriesDropdown.classList.add('active');
});

industriesDropdown.addEventListener('mouseleave', () => {
  industriesDropdown.classList.remove('active');
});

// Mobile click
industriesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  industriesDropdown.classList.toggle('active');
});

















/***************************************************
 INICIALIZAR *PRIMER CARRUSEL* (el que no funcionaba)
***************************************************/
const track = document.querySelector('.carousel-track');

if (track) {
  const slides = Array.from(track.children);
  const btnLeft = document.querySelector('.arrow.left');
  const btnRight = document.querySelector('.arrow.right');
  let index = 0;

  function actualizarCarrusel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  btnLeft.addEventListener("click", () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    actualizarCarrusel();
  });

  btnRight.addEventListener("click", () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    actualizarCarrusel();
  });

  window.addEventListener("resize", actualizarCarrusel);
  actualizarCarrusel();
}




/***************************************************
  SEGUNDO CARRUSEL
***************************************************/
const trackDos = document.querySelector('.trackDos');

if (trackDos) {
  const slidesDos = Array.from(trackDos.children);
  const btnLeftDos = document.querySelector('.btnLeftDos');
  const btnRightDos = document.querySelector('.btnRightDos');
  const windowDos = document.querySelector('.carousel.dos .carousel-window');

  let indexDos = 0;

  function actualizarCarruselDos() {
    const slideWidth = windowDos.clientWidth;
    slidesDos.forEach(s => s.style.width = slideWidth + "px");
    trackDos.style.transform = `translateX(-${indexDos * slideWidth}px)`;
  }

  // ⬅️ Mover a la izquierda con loop
  btnLeftDos.addEventListener("click", () => {
    indexDos = (indexDos > 0) ? indexDos - 1 : slidesDos.length - 1;
    actualizarCarruselDos();
  });

  // ➡️ Mover a la derecha con loop
  btnRightDos.addEventListener("click", () => {
    indexDos = (indexDos < slidesDos.length - 1) ? indexDos + 1 : 0;
    actualizarCarruselDos();
  });

  window.addEventListener("resize", actualizarCarruselDos);
  actualizarCarruselDos();
}



/***************************************************
 FAQ ACORDEÓN
***************************************************/
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const btn = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');
  const icon = faq.querySelector('.icon');

  btn.addEventListener('click', () => {

    faqs.forEach(other => {
      if (other !== faq) {
        other.querySelector('.faq-answer').classList.remove('show');
        other.querySelector('.icon').textContent = "+";
      }
    });

    answer.classList.toggle('show');
    icon.textContent = answer.classList.contains('show') ? "−" : "+";
  });
});
