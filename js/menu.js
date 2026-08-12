const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const navLinks = document.getElementById("nav-links");

// Abrir menú
menuOpenBtn.addEventListener("click", () => {
    navLinks.classList.add("active");
})

// Cerrar menú
menuCloseBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
})