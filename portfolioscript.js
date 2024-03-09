// Header toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// Typing Effect

let typed = new Typed(".auto-input", {
    strings: ['Full Stack Java Developer!', 'Java Developer!', 'Front-End Developer!'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})

let navLinks = document.querySelectorAll('nav ul li a');
// console.log(navLinks);

let sections = document.querySelectorAll('sections');
console.log(sections);