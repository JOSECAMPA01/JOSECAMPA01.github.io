const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {

        // CERRAR TODOS LOS DEMÁS
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        // ABRIR / CERRAR EL SELECCIONADO
        item.classList.toggle('active');
    });
});






const faq2Questions = document.querySelectorAll(".faq2-question");

faq2Questions.forEach((q) => {
    q.addEventListener("click", () => {
        const parent = q.parentElement;
        const answer = parent.querySelector(".faq2-answer");
        const icon = q.querySelector(".faq2-icon");

        // cerrar los demás
        document.querySelectorAll(".faq2-item").forEach((item) => {
            if (item !== parent) {
                item.classList.remove("active");
                item.querySelector(".faq2-answer").style.display = "none";
                item.querySelector(".faq2-icon").textContent = "+";
            }
        });

        // abrir/cerrar actual
        const isOpen = parent.classList.contains("active");
        parent.classList.toggle("active");

        answer.style.display = isOpen ? "none" : "block";
        icon.textContent = isOpen ? "+" : "−";
    });
});

