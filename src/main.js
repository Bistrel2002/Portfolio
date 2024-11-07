let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const text = box.querySelector('.text');
    const counter = text.querySelector('.counter');
    const target = +counter.getAttribute('data-target');

    // Create blocks for the background up to 100
    for (let i = 0; i < target; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.transform = `rotate(${3.6 * i}deg)`;
        block.style.animationDelay = `${i / 50}s`;
        text.appendChild(block);
    }

    counter.innerText = 0;

    // Animate the blocks up to the target
    const numberCount = () => {
        const value = +counter.innerText;
        if (value < target) {
            counter.innerText = Math.ceil(value + 1);
            setTimeout(numberCount, 20);
        }
    };

    numberCount();

});