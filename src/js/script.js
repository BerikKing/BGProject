let menu = document.querySelector(".mobile_menu");
let hamburger1 = document.querySelector(".humburger-1");
let hamburger2 = document.querySelector(".humburger-2");
let hamburger3 = document.querySelector(".humburger-3");
let show = document.querySelector('.header_inner_mobile_menu');
let main = document.querySelector('.main');
let inner = document.querySelector('.header_inner')

menu.addEventListener('click', (e) => {
    show.classList.toggle('show')
    hamburger1.classList.toggle('active');
    hamburger2.classList.toggle('active');
    hamburger3.classList.toggle('active');
    
})
window.addEventListener("click", (e) => {
    if(e.target === main) {
        show.classList.remove('show')
        hamburger1.classList.remove('active');
        hamburger2.classList.remove('active');
        hamburger3.classList.remove('active');
    }
    // console.log(e.target);
})