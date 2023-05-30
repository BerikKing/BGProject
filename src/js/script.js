let menu = document.querySelector(".mobile_menu");
let hamburger1 = document.querySelector(".humburger-1");
let hamburger2 = document.querySelector(".humburger-2");
let hamburger3 = document.querySelector(".humburger-3");

menu.addEventListener('click', () => {
    hamburger1.classList.toggle('active');
    hamburger2.classList.toggle('active');
    hamburger3.classList.toggle('active');
    
})